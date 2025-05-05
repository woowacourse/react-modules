import { useState } from 'react';

const EXPIRYDATE_RULE = {
  INVALID_YEAR_LENGTH_ERROR: '연도는 2자리로 입력해 주세요.',
  INVALID_MONTH_LENGTH_ERROR: '월은 2자리로 입력해 주세요.',
  YEAR_IS_NOT_A_NUMBER: '연도는 숫자로 입력해 주세요.',
  MONTH_IS_NOT_A_NUMBER: '월은 숫자로 입력해 주세요.',
  INVALID_YEAR: '유효하지 않은 연도입니다.',
  INVALID_MONTH: '유효하지 않은 월입니다.',
  MAX_LENGTH: 2,
  MONTH_MIN: 1,
  MONTH_MAX: 12,
  YEAR_MIN: 25,
} as const;

type ValitationResult = {
  date: dateType;
  error: errorType[];
  updateExpiryDate: (value: string, dateName: 'month' | 'year') => void;
};

type dateType = {
  month: string;
  year: string;
};

type errorType = {
  isValidate: boolean;
  errorMessage: string;
};

const initialError = {
  isValidate: false,
  errorMessage: '',
};

export default function useExpiryDate(): ValitationResult {
  const [date, setDate] = useState<dateType>({ month: '', year: '' });
  const [error, setError] = useState<errorType[]>(
    Array.from({ length: EXPIRYDATE_RULE.MAX_LENGTH }, () => initialError)
  );

  const updateError = (index: number, isError: boolean, message: string) => {
    setError((prev) => {
      prev[index] = {
        isValidate: isError,
        errorMessage: message,
      };
      return prev;
    });
  };

  const updateExpiryDate = (value: string, dateUnit: 'month' | 'year') => {
    if (value.length > EXPIRYDATE_RULE.MAX_LENGTH) return;

    if (dateUnit === 'month') {
      validateMonth(value);

      setDate((prev) => ({ ...prev, month: value }));
    } else if (dateUnit === 'year') {
      validateYear(value);

      setDate((prev) => ({ ...prev, year: value }));
    }
  };

  const validateMonth = (value: string) => {
    if (value === '') {
      updateError(0, false, '');
      return;
    }

    if (!/^\d*$/.test(value)) {
      updateError(0, true, EXPIRYDATE_RULE.MONTH_IS_NOT_A_NUMBER);
      return;
    }
    if (value.length < EXPIRYDATE_RULE.MAX_LENGTH) {
      updateError(0, true, EXPIRYDATE_RULE.INVALID_MONTH_LENGTH_ERROR);
      return;
    }
    if (
      Number(value) < EXPIRYDATE_RULE.MONTH_MIN ||
      Number(value) > EXPIRYDATE_RULE.MONTH_MAX
    ) {
      updateError(0, true, EXPIRYDATE_RULE.INVALID_MONTH);
      return;
    }
    updateError(0, false, '');
  };

  const validateYear = (value: string) => {
    if (value === '') {
      updateError(1, false, '');
      return;
    }

    if (!/^\d*$/.test(value)) {
      updateError(1, true, EXPIRYDATE_RULE.YEAR_IS_NOT_A_NUMBER);
      return;
    }
    if (value.length < EXPIRYDATE_RULE.MAX_LENGTH) {
      updateError(1, true, EXPIRYDATE_RULE.INVALID_YEAR_LENGTH_ERROR);
      return;
    }
    if (Number(value) < EXPIRYDATE_RULE.YEAR_MIN) {
      updateError(1, true, EXPIRYDATE_RULE.INVALID_YEAR);
      return;
    }
    updateError(1, false, '');
  };

  return { date, error, updateExpiryDate };
}
