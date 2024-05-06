import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

import { INPUT_RULES, VALIDATION_MESSAGES } from "../constants/card-custom-hook";

const useCardPasswordValidation = () => {
  const [errorState, setErrorState] = useState(false);

  const [errorText, setErrorText] = useState("");

  const validateCardPassword = (value: string) => {
    if (!cardInputValidator.validateNumericInput(value)) {
      setErrorText(VALIDATION_MESSAGES.onlyNumbersAllowed);
      setErrorState(true);

      return false;
    }

    if (!cardInputValidator.validateInputLength(value, INPUT_RULES.validCardPasswordNumberLength)) {
      setErrorText(VALIDATION_MESSAGES.invalidCardPassword);
      setErrorState(true);

      return true;
    }

    setErrorState(false);
    setErrorText("");

    return true;
  };

  return {
    errorState,
    errorText,
    validateCardPassword,
  };
};

export default useCardPasswordValidation;
