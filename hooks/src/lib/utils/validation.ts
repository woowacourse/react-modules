import {
  CURRENT_YEAR,
  ERROR_MESSAGE,
  MAX_MONTH,
  MIN_MONTH,
  NUMBER_REGEX,
} from '../constants';
import { ValidateFuncReturnType } from '../types';

export const validateNumericString = (
  value: string
): ValidateFuncReturnType => {
  const isValid = NUMBER_REGEX.test(value);

  if (!isValid) return { error: true, message: ERROR_MESSAGE.NUMBER_ONLY };
  return { error: false, message: '' };
};

export const isExpirationDate = (
  type: 'month' | 'year',
  value: string
): ValidateFuncReturnType => {
  const isNumberError = validateNumericString(value);
  if (isNumberError.error) return isNumberError;

  const num = parseInt(value);
  if (type === 'month') {
    return validateMonth(num);
  } else if (type === 'year') {
    return validateYear(num);
  }

  return { error: false, message: '' };
};

export const validateMonth = (month: number): ValidateFuncReturnType => {
  if (month < MIN_MONTH || month > MAX_MONTH) {
    return { error: true, message: ERROR_MESSAGE.MONTH_VALID };
  }
  return { error: false, message: '' };
};

export const validateYear = (year: number): ValidateFuncReturnType => {
  if (year < CURRENT_YEAR) {
    return { error: true, message: ERROR_MESSAGE.YEAR_VALID };
  }
  return { error: false, message: '' };
};
