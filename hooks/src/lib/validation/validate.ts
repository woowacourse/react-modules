import {
  BLANK_PATTERN,
  DOUBLE_BLANK,
  MONTH_RANGE,
  NUMBER,
  UPPERCASE_AND_SPACE_ONLY,
  YEAR_RANGE,
} from "../constants/cardInputInformation";

export function isRightLength(value: string, maxLength: number) {
  return value.length === maxLength;
}
export function hasBlank(value: string) {
  return BLANK_PATTERN.test(value);
}

export function isDoubleBlank(value: string) {
  return DOUBLE_BLANK.test(value);
}

export function isNumber(value: string) {
  return NUMBER.test(value);
}

export function isEmpty(value: string) {
  return value.length === 0;
}

export function isValidMonth(value: string) {
  const month = Number(value);
  return MONTH_RANGE.MIN <= month && month <= MONTH_RANGE.MAX;
}

export function isValidYear(value: string) {
  const year = Number(value);
  return YEAR_RANGE.MIN <= year && year <= YEAR_RANGE.MAX;
}

export function isUpperCase(value: string) {
  return UPPERCASE_AND_SPACE_ONLY.test(value) && value.length !== 0;
}
