import { ERROR_MESSAGES } from '../constants/card';

export const validateCVC = (value: string, cardCVCLength: number): string => {
  if (value !== '' && Number.isNaN(Number(value))) {
    return ERROR_MESSAGES.ONLY_NUMBERS;
  }

  if (value !== '' && value.length !== cardCVCLength) {
    return ERROR_MESSAGES.CVC_LENGTH(cardCVCLength);
  }

  return '';
};
