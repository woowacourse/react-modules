import { useEffect, useState } from "react";
import { ValidationType } from "../../types/validation";
import { ERROR_MESSAGE } from "../constants/error";
import isLengthEqual from "../utils/isLengthEqual";
import isPositiveInteger from "../utils/isPositiveInteger";

const MAX_LENGTH = 2;

const defaultErrorState = {
  isError: false,
  errorMessage: null,
};

const usePasswordValidation = (value: string): ValidationType => {
  const [passwordValidationResult, setPasswordValidationResult] =
    useState<ValidationType>(defaultErrorState);

  useEffect(() => {
    if (!isPositiveInteger(value)) {
      setPasswordValidationResult({
        isError: true,
        errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
      });
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
