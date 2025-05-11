import { useState } from 'react';
import validateNumber from '../utils/validateNumber';
import validateMaxLength from '../utils/validateMaxLength';
import validateRange from '../utils/validateRange';

type CardExpireDate = {
  month: string;
  year: string;
};

export type CardExpireDateValidateResult = {
  isValid: {
    month: boolean;
    year: boolean;
  };
  errorMessage: string | null;
  validateCardExpireDate: (
    expireDate: CardExpireDate,
    key: 'month' | 'year'
  ) => void;
  validateCardExpireDateBlur: (
    expireDate: CardExpireDate,
    key: 'month' | 'year'
  ) => void;
};

const useCardExpireDateValidate = (): CardExpireDateValidateResult => {
  const [isValid, setIsValid] = useState({
    month: true,
    year: true
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  const validateCardExpireDate = (
    expireDate: CardExpireDate,
    key: 'month' | 'year'
  ) => {
    if (!validateNumber(expireDate[key])) {
      setIsValid({
        ...isValid,
        [key]: false
      });

      setErrorMessage('숫자만 입력해주세요.');
      return;
    }

    if (!validateMaxLength(expireDate[key], 2)) {
      setIsValid({
        ...isValid,
        [key]: false
      });

      setErrorMessage('2자리만 입력해주세요.');
      return;
    }

    if (key === 'month' && expireDate[key].length === 2) {
      if (!validateRange(expireDate[key], 1, 12)) {
        setIsValid({
          ...isValid,
          month: false
        });

        setErrorMessage('1~12 사이의 숫자를 입력해주세요.');
        return;
      }
    }

    if (key === 'year' && expireDate[key].length === 2) {
      if (!validateRange(expireDate[key], currentYear, currentYear + 5)) {
        setIsValid({
          ...isValid,
          year: false
        });

        setErrorMessage('유효한 년도를 입력해주세요.');
        return;
      }
    }

    if (
      expireDate.month.length === 2 &&
      expireDate.year.length === 2 &&
      !(
        Number(expireDate.year) === currentYear &&
        Number(expireDate.month) >= currentMonth
      )
    ) {
      setIsValid({
        ...isValid,
        month: false
      });

      setErrorMessage('유효한 만료일을 입력해주세요.');
      return;
    }

    setIsValid({
      ...isValid,
      [key]: true
    });

    setErrorMessage(null);
  };

  const validateCardExpireDateBlur = (
    expireDate: CardExpireDate,
    key: 'month' | 'year'
  ) => {
    if (expireDate[key].length < 2) {
      setIsValid({
        ...isValid,
        [key]: false
      });

      setErrorMessage('2자리의 숫자를 입력해주세요.');
      return;
    }
  };

  return {
    isValid,
    errorMessage,
    validateCardExpireDate,
    validateCardExpireDateBlur
  };
};

export default useCardExpireDateValidate;
