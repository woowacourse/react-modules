import { ErrorState, ValidationRule } from "../lib/types";

export const commonConditions = {
  hasLengthInRange: (min: number, max: number) => (value: string) => {
    const targetLength = value.length;
    return targetLength >= min && targetLength <= max;
  },
  isFilled: (value: string) => value !== "",
  hasExactLength: (length: number) => (value: string) =>
    value.length === length,
};

export const getErrorByRules = (
  value: string,
  rules: ValidationRule[]
): ErrorState => {
  for (const { condition, errorMessage } of rules) {
    if (!condition(value)) {
      return { isValid: false, errorMessage: errorMessage };
    }
  }
  return { isValid: true, errorMessage: "" };
};

export const isNonNumericNonEmpty = (value: string) => {
  return !/^\d+$/.test(value) && value !== "";
};
