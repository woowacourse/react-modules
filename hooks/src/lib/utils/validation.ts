import { CURRENT_YEAR, ERROR_MESSAGE, MAX_MONTH, MIN_MONTH, NUMBER_REGEX } from "../constants";
import { ValidateFuncReturnType } from "../types";

export const validateNumericString = (value: string): ValidateFuncReturnType => {
  const error = !NUMBER_REGEX.test(value);

  if (error) return { error, errorMessage: ERROR_MESSAGE.NUMBER_ONLY };
  return { error, errorMessage: "" };
};

export const validateExpirationDate = (value: string): ValidateFuncReturnType => {
  const isNumberError = validateNumericString(value);
  if (isNumberError.error) return isNumberError;

  const month = parseInt(value.slice(0, 2));
  const year = parseInt(value.slice(2, 4));

  if (month < MIN_MONTH || month > MAX_MONTH) {
    return { error: true, errorMessage: ERROR_MESSAGE.MONTH_VALID };
  }

  if (year < CURRENT_YEAR) {
    return { error: true, errorMessage: ERROR_MESSAGE.YEAR_VALID };
  }

  return { error: false, errorMessage: "" };
};
