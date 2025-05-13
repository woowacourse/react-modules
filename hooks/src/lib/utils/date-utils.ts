import { EXPIRY_DATE_LENGTH } from "../constants";

export function isValidExpiryDateFormat(value: string): boolean {
  return value.length === EXPIRY_DATE_LENGTH && /^\d{4}$/.test(value);
}

export function isValidExpiryMonth(value: string): boolean {
  if (value.length !== EXPIRY_DATE_LENGTH) return false;
  const month = Number(value.slice(0, 2));
  return month >= 1 && month <= 12;
}

/**
 * 유효기간이 만료되지 않았는지 검사
 */
export function isNotExpiredDate(value: string): boolean {
  if (!isValidExpiryDateFormat(value)) return false;

  const month = +value.slice(0, 2);
  const year = +value.slice(2, 4);
  const now = new Date();
  const currentY = now.getFullYear() % 100;
  const currentM = now.getMonth() + 1;
  return year > currentY || (year === currentY && month >= currentM);
}
