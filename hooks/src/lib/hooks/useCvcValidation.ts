import { useEffect, useState } from "react";
import { ValidationType } from "../../types/validation";
import { ERROR_MESSAGE } from "../constants/error";
import isLengthEqual from "../utils/isLengthEqual";
import isPositiveInteger from "../utils/isPositiveInteger";

const MAX_LENGTH = 3;

const defaultErrorState = {
  isError: false,
  errorMessage: null,
};

const useCvcValidation = (value: string): ValidationType => {
  const [cvcValidationResult, setCvcValidationResult] =
    useState<ValidationType>(defaultErrorState);

  useEffect(() => {
    if (!isPositiveInteger(value)) {
      setCvcValidationResult({
        isError: true,
        errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
      });
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
