import {
  CURRENT_YEAR,
  ERROR_MESSAGE,
  MAX_MONTH,
  MIN_MONTH,
  NUMBER_REGEX,
} from '../constants';
import { ValidateFuncReturnType } from '../types';

export const isNumber = (value: string): ValidateFuncReturnType => {
  const error = !NUMBER_REGEX.test(value);

  if (error) return { error, message: ERROR_MESSAGE.NUMBER_ONLY };
  return { error, message: '' };
};

export const isExpirationDate = (
  type: 'month' | 'year',
  value: string
): ValidateFuncReturnType => {
  const isNumberError = isNumber(value);
  if (isNumberError.error) return isNumberError;

  const num = parseInt(value);
  if (type === 'month' && (num < MIN_MONTH || num > MAX_MONTH)) {
    return { error: true, message: ERROR_MESSAGE.MONTH_VALID };
  } else if (type === 'year' && num < CURRENT_YEAR) {
    return { error: true, message: ERROR_MESSAGE.YEAR_VALID };
  }

  return { error: false, message: '' };
};
