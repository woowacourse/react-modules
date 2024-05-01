import { DOUBLE_BLANK, UPPERCASE_AND_SPACE_ONLY } from '../constants/system';
import { isValidMonth, isValidYear } from '../utils/checkDateRange';
import { ErrorStatus } from '../types/errorStatus';

// function checkTrimBlank(n: string) {
//   if ((n.trim() === '' && n !== '') || n.trim().length !== n.length) {
//     throw new Error(ERROR_MESSAGES.INVALID_TRIM_BLANK);
//   }
// }

export function checkDoubleBlank(str: string) {
  if (DOUBLE_BLANK.test(str)) {
    throw new Error(ErrorStatus.IS_DOUBLE_BLANK);
  }
}

export function validateNumber(str: string) {
  if (!Number.isInteger(Number(str))) {
    throw new Error(ErrorStatus.IS_NOT_NUMBER);
  }
}

// function checkEmpty(n: string) {
//   if (n.length === 0) {
//     return true;
//   }
// }

export function validateMonth(n: string) {
  const month = Number(n);
  if (!isValidMonth(month)) {
    throw new Error(ErrorStatus.INVALID_MONTH);
  }
}

export function validateYear(n: string) {
  const year = Number(n);
  if (!isValidYear(year)) {
    throw new Error(ErrorStatus.INVALID_YEAR);
  }
}

export function validateUpperCase(str: string) {
  if (!UPPERCASE_AND_SPACE_ONLY.test(str) && str.length !== 0) {
    throw new Error(ErrorStatus.ONLY_UPPERCASE);
  }
}

export function checkLength(str: string, length: number) {
  if (str.length > length) {
    return false;
  }
  return true;
}

export function validateLength(str: string, length: number) {
  if (!checkLength(str, length)) {
    throw new Error(ErrorStatus.INVALID_LENGTH);
  }
}
