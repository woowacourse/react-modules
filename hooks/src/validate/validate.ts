import { DOUBLE_BLANK, UPPERCASE_AND_SPACE_ONLY } from "@/constants/system";
import { isValidMonth, isValidYear } from "@/utils/checkDateRange";
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

export function validateMonth(n: string) {
  const month = Number(n);
  if (!isValidMonth(month)) {
    return { error: ErrorStatus.INVALID_MONTH, isValid: false };
  }
  return { error: ErrorStatus.INVALID_MONTH, isValid: true };
}

export function validateYear(n: string) {
  const year = Number(n);
  if (!isValidYear(year)) {
    return { error: ErrorStatus.INVALID_YEAR, isValid: false };
  }
  return { error: ErrorStatus.INVALID_YEAR, isValid: true };
}

export function validateUpperCase(str: string) {
  if (!UPPERCASE_AND_SPACE_ONLY.test(str) && str.length !== 0) {
    return { error: ErrorStatus.ONLY_UPPERCASE, isValid: false };
  }
  return { error: ErrorStatus.ONLY_UPPERCASE, isValid: true };
}

export function validLength(str: string, length: number) {
  if (str.length !== length) {
    return { error: ErrorStatus.INVALID_LENGTH, isValid: false };
  }
  return { error: ErrorStatus.INVALID_LENGTH, isValid: true };
}
