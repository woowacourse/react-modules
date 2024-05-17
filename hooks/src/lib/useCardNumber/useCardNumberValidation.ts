import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

import { VALIDATION_MESSAGES } from "../constants/cardCustomHook";

const useCardNumberValidation = () => {
  const [errorState, setErrorState] = useState(false);

  const [errorText, setErrorText] = useState("");

  const validateCardNumber = (value: string) => {
    if (!cardInputValidator.validateNumericInput(value)) {
      setErrorState(true);
      setErrorText(VALIDATION_MESSAGES.onlyNumbersAllowed);

      return false;
    }

    if (!cardInputValidator.validateCardNumberLength(value)) return false;

    if (!cardInputValidator.validateCardNumberExactLength(value)) {
      setErrorState(true);
      setErrorText(cardInputValidator.invalidCardNumberLengthMessage(value));

      return true;
    }

    setErrorState(false);
    setErrorText("");
    return true;
  };

  return {
    errorState,
    errorText,
    validateCardNumber,
  };
};

export default useCardNumberValidation;
