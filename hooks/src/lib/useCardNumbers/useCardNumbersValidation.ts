import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

import { VALIDATION_MESSAGES } from "../constants/card-custom-hook";

interface ValidResult {
  isValid: boolean;
  errorText: string;
}

const useCardNumberValidation = () => {
  const [validationResult, setValidationResult] = useState<ValidResult>({
    isValid: false,
    errorText: "",
  });

  const updateValidResult = (isValid: boolean, errorText: string) => {
    setValidationResult({
      isValid,
      errorText,
    });
  };

  const validateCardNumber = (value: string, maxLength: number, errorText: string) => {
    if (cardInputValidator.validateOverInputLength(value, maxLength)) return false;

    if (!cardInputValidator.validateNumericInput(value)) {
      updateValidResult(false, VALIDATION_MESSAGES.onlyNumbersAllowed);

      return false;
    }

    if (!cardInputValidator.validateInputLength(value, maxLength)) {
      updateValidResult(false, errorText);

      return true;
    }

    updateValidResult(true, "");

    return true;
  };

  return {
    validationResult,
    validateCardNumber,
  };
};

export default useCardNumberValidation;
