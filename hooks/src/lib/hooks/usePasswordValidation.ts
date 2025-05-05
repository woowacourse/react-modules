import { useEffect, useState } from "react";
import { ValidationType } from "../../types/validation";
import { ERROR_MESSAGE, defaultValidationValue } from "../constants/validation";
import { isEmpty, isLengthEqual, isPositiveInteger } from "../utils/validation";

const MAX_LENGTH = 2;

const usePasswordValidation = (value: string): ValidationType => {
  const [passwordValidationResult, setPasswordValidationResult] =
    useState<ValidationType>(defaultValidationValue);

  useEffect(() => {
    setPasswordValidationResult(defaultValidationValue);

    if (isEmpty(value)) return;

    if (!isPositiveInteger(value)) {
      setPasswordValidationResult({
        isError: true,
        errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
      });
      return;
    }

    if (!isLengthEqual(value, MAX_LENGTH)) {
      setPasswordValidationResult({
        isError: true,
        errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
      });
    }
  }, [value]);

  return passwordValidationResult;
};

export default usePasswordValidation;
