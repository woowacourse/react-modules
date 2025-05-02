import { EXPIRY_DATE_LENGTH } from "../constants";
import { isNumeric } from "./isNumeric";

export function isValidExpiryDateFormat(value: string): boolean {
  return value.length === EXPIRY_DATE_LENGTH && /^\d{4}$/.test(value);
}

export function isValidExpiryMonth(value: string): boolean {
  if (!isNumeric(value) || value.length !== EXPIRY_DATE_LENGTH) return false;

  const month = Number(value.slice(0, 2));
  return month >= 1 && month <= 12;
}

export function isValidExpiryYear(value: string): boolean {
  if (!isNumeric(value) || value.length !== EXPIRY_DATE_LENGTH) return false;

  const year = Number(value.slice(2, 4));
  const currentYear = new Date().getFullYear() % 100;

  return year >= currentYear;
}

/**
 * 유효기간이 만료되지 않았는지 검사
 */
export function isNotExpiredDate(value: string): boolean {
  if (!isNumeric(value) || value.length !== EXPIRY_DATE_LENGTH) return false;

  const month = Number(value.slice(0, 2));
  const year = Number(value.slice(2, 4));

  if (month < 1 || month > 12) return false;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  return year > currentYear || (year === currentYear && month >= currentMonth);
}
