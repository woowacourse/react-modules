import { useState } from 'react';
import { VALIDATION_RULE } from './constants/validationRule';
import { ERROR_MESSAGE } from './constants/errorMessage';

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
    Array.from(
      { length: VALIDATION_RULE.EXPIRY_DATE.MAX_LENGTH },
      () => initialError
    )
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
    if (value.length > VALIDATION_RULE.EXPIRY_DATE.MAX_LENGTH) return;

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
      updateError(0, true, ERROR_MESSAGE.EXPIRY_DATE.MONTH_IS_NOT_A_NUMBER);
      return;
    }
    if (value.length < VALIDATION_RULE.EXPIRY_DATE.MAX_LENGTH) {
      updateError(0, true, ERROR_MESSAGE.EXPIRY_DATE.INVALID_MONTH_LENGTH);
      return;
    }
    if (
      Number(value) < VALIDATION_RULE.EXPIRY_DATE.MONTH_MIN ||
      Number(value) > VALIDATION_RULE.EXPIRY_DATE.MONTH_MAX
    ) {
      updateError(0, true, ERROR_MESSAGE.EXPIRY_DATE.INVALID_MONTH);
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
      updateError(1, true, ERROR_MESSAGE.EXPIRY_DATE.YEAR_IS_NOT_A_NUMBER);
      return;
    }
    if (value.length < VALIDATION_RULE.EXPIRY_DATE.MAX_LENGTH) {
      updateError(1, true, ERROR_MESSAGE.EXPIRY_DATE.INVALID_YEAR_LENGTH);
      return;
    }
    if (Number(value) < VALIDATION_RULE.EXPIRY_DATE.YEAR_MIN) {
      updateError(1, true, ERROR_MESSAGE.EXPIRY_DATE.INVALID_YEAR);
      return;
    }
    updateError(1, false, '');
  };

  return { date, error, updateExpiryDate };
}
