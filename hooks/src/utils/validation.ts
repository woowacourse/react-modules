import { ValidationType } from "../types/validation";
import { defaultValidationValue, ERROR_MESSAGE } from "../constants/validation";

export const isEmpty = (value: string) => {
  return value === "";
};

export const isPositiveInteger = (value: string) => {
  return /^\d*$/.test(value);
};

export const isLengthEqual = (value: string, maxLength: number) => {
  return value.length === maxLength;
};

export const isLengthInRange = (
  value: string,
  minLength: number,
  maxLength: number
) => {
  return value.length >= minLength && value.length <= maxLength;
};

export const validateNumberWithLength = (
  value: string,
  maxLength: number
): ValidationType => {
  if (isEmpty(value)) return defaultValidationValue;

  if (!isPositiveInteger(value)) {
    return { isError: true, errorMessage: ERROR_MESSAGE.INVALID_NUMBER };
  }

  if (!isLengthEqual(value, maxLength)) {
    return {
      isError: true,
      errorMessage: `${maxLength}${ERROR_MESSAGE.INVALID_LENGTH}`,
    };
  }

  return defaultValidationValue;
};

export const validateNumberWithLengthRange = (
  value: string,
  minLength: number,
  maxLength: number
): ValidationType => {
  if (isEmpty(value)) return defaultValidationValue;

  if (!isPositiveInteger(value)) {
    return { isError: true, errorMessage: ERROR_MESSAGE.INVALID_NUMBER };
  }

  if (!isLengthInRange(value, minLength, maxLength)) {
    return {
      isError: true,
      errorMessage: `${minLength}-${maxLength}${ERROR_MESSAGE.INVALID_LENGTH_RANGE}`,
    };
  }

  return defaultValidationValue;
};
