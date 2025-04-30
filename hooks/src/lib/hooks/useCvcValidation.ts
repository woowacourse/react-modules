import { useEffect, useState } from "react";
import { ValidationType } from "../../types/validation";
import { ERROR_MESSAGE, defaultValidationValue } from "../constants/validation";
import { isEmpty, isLengthEqual, isPositiveInteger } from "../utils/validation";

const MAX_LENGTH = 3;

const useCvcValidation = (value: string): ValidationType => {
  const [cvcValidationResult, setCvcValidationResult] =
    useState<ValidationType>(defaultValidationValue);

  useEffect(() => {
    if (isEmpty(value)) return;

    if (!isPositiveInteger(value)) {
      setCvcValidationResult({
        isError: true,
        errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
      });
      return;
    }

    if (!isLengthEqual(value, MAX_LENGTH)) {
      setCvcValidationResult({
        isError: true,
        errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
      });
    }
  }, [value]);

  return cvcValidationResult;
};

export default useCvcValidation;
