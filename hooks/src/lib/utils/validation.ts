import { EXPIRED_TYPE } from './validation.type';

export const isNotNumber = (value: string) => isNaN(Number(value));

export const isValidNumberLength = (value: string, validLength: number) =>
  value.length === validLength;

export const isValidNumberRange = (number: number, min: number, max: number) =>
  number >= min && number <= max;

export const validateExpiredDate = (month: string, year: string): EXPIRED_TYPE => {
  if (year.length < 2 || month.length < 2) return false;
  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear() - 2000;

  if (Number(year) === todayYear && Number(month) < todayMonth) {
    return 'INVALID_MONTH';
  }

  if (Number(year) < todayYear) {
    return 'INVALID_YEAR';
  }

  return false;
};

const ERROR_MESSAGES = {
  NOT_NUMBER: '숫자를 입력해주세요.',
  MAX_LENGTH: (length: number) => `${length}개의 숫자를 입력해주세요.`,
};

export const getNumberErrorMessage = (number: string, validLength: number) => {
  if (isNotNumber(number)) return ERROR_MESSAGES.NOT_NUMBER;

  if (isValidNumberLength(number, validLength)) return ERROR_MESSAGES.MAX_LENGTH(validLength);

  return '';
};
