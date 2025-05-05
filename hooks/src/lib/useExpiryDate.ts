import { useState } from 'react';
import { VALIDATION_RULE } from './constants/validationRule';
import { ERROR_MESSAGE } from './constants/errorMessage';

type ValitationResult = {
  date: dateType;
  error: errorType[];
  updateExpiryDate: (value: string, dateName: 'month' | 'year') => void;
};

type UpdateErrorArgs =
  | { index: number; isValid: true; errorMessage: string }
  | { index: number; isValid: false };

type dateType = {
  month: string;
  year: string;
};

type errorType = {
  isValid: boolean;
  errorMessage: string;
};

const initialError = {
  isValid: false,
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

  const updateError = (args: UpdateErrorArgs) => {
    setError((prev) => {
      const updated = [...prev];
      updated[args.index] = {
        isValid: args.isValid,
        errorMessage: args.isValid ? args.errorMessage : '',
      };
      return updated;
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
      updateError({ index: 0, isValid: false });
      return;
    }

    if (!/^\d*$/.test(value)) {
      updateError({
        index: 0,
        isValid: true,
        errorMessage: ERROR_MESSAGE.EXPIRY_DATE.MONTH_IS_NOT_A_NUMBER,
      });
      return;
    }
    if (value.length < VALIDATION_RULE.EXPIRY_DATE.MAX_LENGTH) {
      updateError({
        index: 0,
        isValid: true,
        errorMessage: ERROR_MESSAGE.EXPIRY_DATE.INVALID_MONTH_LENGTH,
      });
      return;
    }
    if (
      Number(value) < VALIDATION_RULE.EXPIRY_DATE.MONTH_MIN ||
      Number(value) > VALIDATION_RULE.EXPIRY_DATE.MONTH_MAX
    ) {
      updateError({
        index: 0,
        isValid: true,
        errorMessage: ERROR_MESSAGE.EXPIRY_DATE.INVALID_MONTH,
      });
      return;
    }
    updateError({ index: 0, isValid: false });
  };

  const validateYear = (value: string) => {
    if (value === '') {
      updateError({ index: 1, isValid: false });
      return;
    }

    if (!/^\d*$/.test(value)) {
      updateError({
        index: 1,
        isValid: true,
        errorMessage: ERROR_MESSAGE.EXPIRY_DATE.YEAR_IS_NOT_A_NUMBER,
      });
      return;
    }
    if (value.length < VALIDATION_RULE.EXPIRY_DATE.MAX_LENGTH) {
      updateError({
        index: 1,
        isValid: true,
        errorMessage: ERROR_MESSAGE.EXPIRY_DATE.INVALID_YEAR_LENGTH,
      });
      return;
    }
    if (Number(value) < VALIDATION_RULE.EXPIRY_DATE.YEAR_MIN) {
      updateError({
        index: 1,
        isValid: true,
        errorMessage: ERROR_MESSAGE.EXPIRY_DATE.INVALID_YEAR,
      });
      return;
    }
    updateError({ index: 1, isValid: false });
  };

  return { date, error, updateExpiryDate };
}
