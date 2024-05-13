import { isValidNumberRange } from './validation/validation';

export const formatMonth = (month: string) => {
  if (isValidNumberRange(Number(month), 2, 9)) return month.padStart(2, '0');

  return month;
};
