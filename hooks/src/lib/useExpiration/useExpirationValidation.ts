import { useState } from 'react';
import { isInvalidMonth, isPastExpirationDate } from './useExpiration.util';
import { EXPIRATION_ERROR_TYPE } from './useExpiration.constant';
import { isContainsNonNumeric } from '../utils/number';

const useExpirationValidation = (expiration: { month: string; year: string }) => {
  const [expirationError, setExpirationError] = useState({ isError: false, errorMessage: '' });

  const validateExpirationDate = (field: 'month' | 'year', value: string) => {
    if (isContainsNonNumeric(value)) {
      setExpirationError({ isError: true, errorMessage: '월은 01에서 12 사이의 숫자여야 합니다.' });
      return EXPIRATION_ERROR_TYPE.nonNumeric;
    }

    const newExpiration = { ...expiration, [field]: value };

    if (isInvalidMonth(newExpiration.month)) {
      setExpirationError({ isError: true, errorMessage: '월은 01에서 12 사이의 숫자여야 합니다.' });
      return EXPIRATION_ERROR_TYPE.invalidMonth;
    }

    if (isPastExpirationDate(newExpiration.month, newExpiration.year)) {
      setExpirationError({ isError: true, errorMessage: '카드 유효기간이 올바르지 않습니다.' });

      return EXPIRATION_ERROR_TYPE.invalidExpirationDate;
    }

    setExpirationError({ isError: false, errorMessage: '' });
    return EXPIRATION_ERROR_TYPE.notError;
  };

  return { expirationError, validateExpirationDate };
};

export default useExpirationValidation;
