import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

import { INPUT_RULES, VALIDATION_MESSAGES } from "../constants/card-custom-hook";

const useCVCValidation = () => {
  const [errorState, setErrorState] = useState(false);

  const [errorText, setErrorText] = useState("");

  const validateCVCNumber = (value: string) => {
    if (cardInputValidator.validateOverInputLength(value, INPUT_RULES.validCVCNumberLength)) return false;

    if (!cardInputValidator.validateNumericInput(value)) {
      setErrorState(true);
      setErrorText(VALIDATION_MESSAGES.onlyNumbersAllowed);

      return false;
    }

    if (!cardInputValidator.validateInputLength(value, INPUT_RULES.validCVCNumberLength)) {
      setErrorState(true);
      setErrorText(VALIDATION_MESSAGES.invalidCVCNumber);

      return true;
    }

    setErrorState(false);
    setErrorText("");

    return true;
  };

  return {
    errorState,
    errorText,
    validateCVCNumber,
  };
};

export default useCVCValidation;
