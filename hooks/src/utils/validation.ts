import { ErrorState, ValidationRule } from "@/types";

export const commonConditions = {
  hasLengthInRange: (min: number, max: number) => (value: string) => {
    const targetLength = value.length;
    return targetLength >= min && targetLength <= max;
  },
  isFilled: (value: string) => value !== "",
  hasExactLength: (length: number) => (value: string) =>
    value.length === length,
};

export const getErrorByRules = <T>(
  value: T,
  rules: ValidationRule<T>[]
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
