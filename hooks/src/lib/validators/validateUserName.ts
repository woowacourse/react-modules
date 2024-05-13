import { ERROR_MESSAGES } from '../constants/card';

export const validateUserName = (
  value: string,
  cardUserNameLength: number,
): string => {
  if (value !== '' && !/^[a-zA-Z\s]+$/.test(value)) {
    return ERROR_MESSAGES.ONLY_ENGLISH;
  }

  if (value !== '' && value.length > cardUserNameLength) {
    return ERROR_MESSAGES.USERNAME_LENGTH_LIMIT(cardUserNameLength);
  }

  return '';
};
