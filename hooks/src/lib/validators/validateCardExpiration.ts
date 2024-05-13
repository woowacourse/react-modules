import { ERROR_MESSAGES } from '../constants/card';

export const validateCardExpiration = (value: string, type: string): string => {
  if (value !== '' && Number.isNaN(Number(value))) {
    return ERROR_MESSAGES.ONLY_NUMBERS;
  }

  if (value !== '' && value.length != 2) {
    return ERROR_MESSAGES.ENTER_TWO_DIGITS;
  }

  if (
    value !== '' &&
    type === 'MM' &&
    !(Number(value) >= 1 && Number(value) <= 12)
  ) {
    return ERROR_MESSAGES.MONTH_RANGE;
  }

  return '';
};
