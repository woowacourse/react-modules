import { USERNAME, EXPIRATION_DATE } from "../lib/constants/validation";

type Validator = (value: string, compareValue?: number | string) => boolean;

export const isEmptyValue = (value: string): boolean => {
  return value.trim() === "";
};

export const isValidNumberValue = (value: string): boolean => {
  return value.trim() !== "" && !Number.isNaN(Number(value));
};

export const validateCardNumberLength: Validator = (value, length) => {
  return value.length === length;
};

export const validateCardCompany: Validator = (value, defaultValue) => {
  return value.trim() !== "" && value !== defaultValue;
};

export const validateMonthFormat = (month: string) => {
  return RegExp(EXPIRATION_DATE.monthRegexp()).test(month);
};

export const validateYearFormat = (year: string) => {
  return RegExp(EXPIRATION_DATE.yearRegexp()).test(year);
};

export const isExpirationUpToDate = (month: string, year: string) => {
  const now = new Date();
  const currentYear = now.getFullYear().toString().slice(-2);
  const currentMonth = (now.getMonth() + 1).toString();

  if (Number(year) < Number(currentYear)) return false;
  if (Number(year) === Number(currentYear)) {
    return Number(month) >= Number(currentMonth);
  }
  return true;
};

export const validateCardExpiration = (month: string, year: string) => {
  return (
    validateMonthFormat(month) &&
    validateYearFormat(year) &&
    isExpirationUpToDate(month, year)
  );
};

export const validateUserName = (value: string, length: number) => {
  return new RegExp(USERNAME.regexp(length)).test(value);
};

export const validateCVCLength: Validator = (value, length) => {
  return value.length === length;
};

export const validatePasswordLength: Validator = (value, length) => {
  return value.length === length;
};
