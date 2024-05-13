import { ERROR_MESSAGES } from '../constants/card';

export const validatePassword = (
  value: string,
  passwordLength: number,
): string => {
  if (value !== '' && Number.isNaN(Number(value))) {
    return ERROR_MESSAGES.ONLY_NUMBERS;
  }

  if (value !== '' && value.length !== passwordLength) {
    return ERROR_MESSAGES.PASSWORD_LENGTH(passwordLength);
  }

  return '';
};
