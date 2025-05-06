import { INPUT_RULE } from '../constants/inputRule';

export const isEmpty = (value: string) => {
  return value === '';
};

export const isNumber = (value: string) => {
  return /^\d*$/.test(value);
};

export const isValidLength = (value: string, length: number) => {
  return value.length === length;
};

export const isValidMonth = (value: string) => {
  return (
    Number(value) > INPUT_RULE.EXPIRY_DATE.MONTH_MIN &&
    Number(value) < INPUT_RULE.EXPIRY_DATE.MONTH_MAX
  );
};

export const isValidYear = (value: string) => {
  return Number(value) >= INPUT_RULE.EXPIRY_DATE.YEAR_MIN;
};
