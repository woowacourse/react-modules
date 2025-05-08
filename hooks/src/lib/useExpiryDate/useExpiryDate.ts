import { useState } from 'react';
import { INPUT_RULE } from '../constants/inputRule';
import { ERROR_MESSAGE } from '../constants/errorMessage';
import { isOverInputLength } from '../utils/overInputLength';
import {
  isEmpty,
  isNumber,
  isValidLength,
  isValidMonth,
  isValidYear,
} from '../utils/validate';
import { initialError } from '../utils/initial';
import { ErrorType } from '../types/errorType';

type ValitationResult = {
  date: dateType;
  error: ErrorType[];
  handleExpiryDate: (value: string, dateName: 'month' | 'year') => void;
};

type UpdateErrorArgs =
  | { index: number; isValid: true; errorMessage: string }
  | { index: number; isValid: false };

type dateType = {
  month: string;
  year: string;
};

export default function useExpiryDate(): ValitationResult {
  const [date, setDate] = useState<dateType>({ month: '', year: '' });
  const [error, setError] = useState<ErrorType[]>(
    Array.from(
      { length: INPUT_RULE.EXPIRY_DATE.MAX_LENGTH },
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

  const handleExpiryDate = (value: string, dateUnit: 'month' | 'year') => {
    if (isOverInputLength(value, INPUT_RULE.EXPIRY_DATE.MAX_LENGTH)) return;

    if (dateUnit === 'month') {
      validateMonth(value);

      setDate((prev) => ({ ...prev, month: value }));
    } else if (dateUnit === 'year') {
      validateYear(value);

      setDate((prev) => ({ ...prev, year: value }));
    }
  };

  const validateMonth = (value: string) => {
    if (isEmpty(value)) {
      updateError({ index: 0, isValid: false });
      return;
    }

    if (!isNumber(value)) {
      updateError({
        index: 0,
        isValid: true,
        errorMessage: ERROR_MESSAGE.EXPIRY_DATE.MONTH_IS_NOT_A_NUMBER,
      });
      return;
    }
    if (!isValidLength(value, INPUT_RULE.EXPIRY_DATE.MAX_LENGTH)) {
      updateError({
        index: 0,
        isValid: true,
        errorMessage: ERROR_MESSAGE.EXPIRY_DATE.INVALID_MONTH_LENGTH,
      });
      return;
    }
    if (!isValidMonth(value)) {
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
    if (isEmpty(value)) {
      updateError({ index: 1, isValid: false });
      return;
    }

    if (!isNumber(value)) {
      updateError({
        index: 1,
        isValid: true,
        errorMessage: ERROR_MESSAGE.EXPIRY_DATE.YEAR_IS_NOT_A_NUMBER,
      });
      return;
    }
    if (!isValidLength(value, INPUT_RULE.EXPIRY_DATE.MAX_LENGTH)) {
      updateError({
        index: 1,
        isValid: true,
        errorMessage: ERROR_MESSAGE.EXPIRY_DATE.INVALID_YEAR_LENGTH,
      });
      return;
    }
    if (!isValidYear(value)) {
      updateError({
        index: 1,
        isValid: true,
        errorMessage: ERROR_MESSAGE.EXPIRY_DATE.INVALID_YEAR,
      });
      return;
    }
    updateError({ index: 1, isValid: false });
  };

  return { date, error, handleExpiryDate };
}
