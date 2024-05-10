import {
  DOUBLE_BLANK,
  MONTH_RANGE,
  UPPERCASE_AND_SPACE_ONLY,
  YEAR_RANGE,
} from "@/constants/system";
import { ErrorStatus } from "@/types/errorStatus";

export function checkDoubleBlank(str: string) {
  if (DOUBLE_BLANK.test(str)) {
    return { error: ErrorStatus.IS_DOUBLE_BLANK, isValid: false };
  }
  return { error: ErrorStatus.IS_DOUBLE_BLANK, isValid: true };
}

export function validateNumber(str: string) {
  if (!Number.isInteger(Number(str))) {
    return { error: ErrorStatus.IS_NOT_NUMBER, isValid: false };
  }
  return { error: ErrorStatus.IS_NOT_NUMBER, isValid: true };
}

export const validateRegex = (str: string, regex: RegExp) => {
  if (!regex.test(str)) {
    return { error: ErrorStatus.IS_NOT_NUMBER, isValid: false };
  }
  return { error: ErrorStatus.IS_NOT_NUMBER, isValid: true };
};

export function validateMonth(n: string) {
  const month = Number(n);
  if (MONTH_RANGE.MIN <= month && month <= MONTH_RANGE.MAX) {
    return { error: ErrorStatus.INVALID_MONTH, isValid: true };
  }
  return { error: ErrorStatus.INVALID_MONTH, isValid: false };
}

export function validateYear(n: string) {
  const year = Number(n);
  if (YEAR_RANGE.MIN <= year && year <= YEAR_RANGE.MAX) {
    return { error: ErrorStatus.INVALID_YEAR, isValid: true };
  }
  return { error: ErrorStatus.INVALID_YEAR, isValid: false };
}

export function validateUpperCase(str: string) {
  if (!UPPERCASE_AND_SPACE_ONLY.test(str) && str.length !== 0) {
    return { error: ErrorStatus.ONLY_UPPERCASE, isValid: false };
  }
  return { error: ErrorStatus.ONLY_UPPERCASE, isValid: true };
}

export function validateLength(str: string, length: number) {
  if (str.length < length) {
    return { error: ErrorStatus.INVALID_LENGTH, isValid: false };
  }
  return { error: ErrorStatus.INVALID_LENGTH, isValid: true };
}
