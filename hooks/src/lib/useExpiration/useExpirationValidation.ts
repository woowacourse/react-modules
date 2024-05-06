import { useState } from 'react';
import { isInvalidMonth, isPastExpirationDate } from './useExpiration.util';
import { EXPIRATION_ERROR_TYPE } from './useExpiration.constant';
import { isContainsNonNumeric } from '../../utils/number';

const useExpirationValidation = (expiration: { month: string; year: string }) => {
  const [expirationError, setExpirationError] = useState({ isError: false, errorMessage: '' });

  const validateExpirationDate = (field: 'month' | 'year', value: string): string => {
    const newExpiration = { ...expiration, [field]: value };

    if (isContainsNonNumeric(value)) {
      setExpirationError({ isError: true, errorMessage: '숫자만 입력 가능합니다.' });
      return EXPIRATION_ERROR_TYPE.nonNumeric;
    }

    if (newExpiration.month.length !== 2) {
      setExpirationError({ isError: true, errorMessage: '두 자리 월을 입력해주세요.' });
      return EXPIRATION_ERROR_TYPE.invalidMonth;
    }

    if (isInvalidMonth(newExpiration.month)) {
      setExpirationError({ isError: true, errorMessage: '월은 01에서 12 사이여야 합니다.' });
      return EXPIRATION_ERROR_TYPE.invalidMonth;
    }

    if (newExpiration.year.length !== 0 && newExpiration.year.length !== 2) {
      setExpirationError({ isError: true, errorMessage: '두 자리 년도를 입력해주세요.' });
      return EXPIRATION_ERROR_TYPE.invalidMonth;
    }

    if (
      newExpiration.month.length === 2 &&
      newExpiration.year.length === 2 &&
      isPastExpirationDate(newExpiration.month, newExpiration.year)
    ) {
      setExpirationError({ isError: true, errorMessage: '카드 유효기간이 올바르지 않습니다.' });

      return EXPIRATION_ERROR_TYPE.invalidExpirationDate;
    }

    setExpirationError({ isError: false, errorMessage: '' });
    return EXPIRATION_ERROR_TYPE.notError;
  };

  return { expirationError, validateExpirationDate };
};

export default useExpirationValidation;
