import { EXPIRED_TYPE } from './validation.type';

export const isNotNumber = (value: string) => isNaN(Number(value));

export const isValidNumberLength = (value: string, validLength: number) =>
  value.length === validLength;

export const isValidNumberRange = (number: number, min: number, max: number) =>
  number >= min && number <= max;

export const validateExpiredDate = (month: string, year: string): EXPIRED_TYPE => {
  if (month.length < 2 || year.length < 2) return false;

  const today = new Date();

  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear() - 2000;

  if (Number(year) === todayYear && Number(month) < todayMonth) return 'INVALID_MONTH';

  if (Number(year) < todayYear) return 'INVALID_YEAR';

  return false;
};

export const NUMBER_ERROR_MESSAGES = {
  NOT_NUMBER: 'NOT_NUMBER',
  MAX_LENGTH: 'MAX_LENGTH',
};

export const getNumberErrorMessage = (number: string, validLength: number) => {
  if (isNotNumber(number)) return 'NOT_NUMBER';

  if (!isValidNumberLength(number, validLength)) return 'MAX_LENGTH';

  return '';
};
