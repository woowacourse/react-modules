import { useState } from "react";
import { ValidationType } from "../../types/validation";
import { ERROR_MESSAGE, defaultValidationValue } from "../constants/validation";
import { isEmpty, isLengthEqual, isPositiveInteger } from "../utils/validation";

interface UseCvcNumberReturn {
  cvcNumber: string;
  cvcNumberValidation: ValidationType;
  handleCvcNumberChange: (value: string) => void;
}

const MAX_LENGTH = 3;

const validateCvcNumber = (value: string): ValidationType => {
  if (isEmpty(value)) return defaultValidationValue;

  if (!isPositiveInteger(value)) {
    return {
      isError: true,
      errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
    };
  }

  if (!isLengthEqual(value, MAX_LENGTH)) {
    return {
      isError: true,
      errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
    };
  }

  return defaultValidationValue;
};

const useCvcNumber = (): UseCvcNumberReturn => {
  const [cvcNumber, setCvcNumber] = useState("");
  const [cvcNumberValidation, setCvcNumberValidation] =
    useState<ValidationType>(defaultValidationValue);

  const handleCvcNumberChange = (value: string) => {
    setCvcNumber(value);
    const validationResult = validateCvcNumber(value);
    setCvcNumberValidation(validationResult);
  };

  return { cvcNumber, cvcNumberValidation, handleCvcNumberChange };
};

export default useCvcNumber;
