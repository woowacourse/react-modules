import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

import {
  INPUT_RULES,
  VALIDATION_MESSAGES,
} from "../constants/card-custom-hook";

const useCVCValidation = () => {
  const [errorState, setErrorState] = useState(false);

  const [errorText, setErrorText] = useState("");

  const validateCVC = (value: string) => {
    const isNumericInputValid = cardInputValidator.validateNumericInput(value);

    if (!isNumericInputValid) {
      setErrorText(VALIDATION_MESSAGES.onlyNumbersAllowed);
      setErrorState(!isNumericInputValid);

      return false;
    }

    const isValidCVCLength = cardInputValidator.validateInputLength(
      value,
      INPUT_RULES.validCVCNumberLength
    );

    if (!isValidCVCLength) {
      setErrorText(VALIDATION_MESSAGES.invalidCVCNumber);
      setErrorState(!isValidCVCLength);

      return true;
    }

    setErrorState(false);
    setErrorText("");
    return true;
  };

  return {
    errorState,
    errorText,
    validateCVC,
  };
};

export default useCVCValidation;
