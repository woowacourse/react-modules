import { ERROR_MESSAGES } from '../constants/card';

export const validateCardCompany = (
  value: string,
  defaultValue: string,
): string => {
  if (value === defaultValue) return ERROR_MESSAGES.SELECT_CARD_COMPANY;

  return '';
};
