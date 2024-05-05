import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

import { INPUT_RULES, VALIDATION_MESSAGES } from "../constants/cardCustomHook";

const useCardNumberValidation = () => {
  const [errorState, setErrorState] = useState<boolean>(false);

  const [errorText, setErrorText] = useState("");

  const validateCardNumber = (value: string) => {
    if (!cardInputValidator.validateNumericInput(value)) {
      setErrorState(true);
      setErrorText(VALIDATION_MESSAGES.onlyNumbersAllowed);

      return false;
    }

    const isOverInputLength = value.length > INPUT_RULES.maxCardNumberLength;

    if (isOverInputLength) return false;

    if (!cardInputValidator.validateCardNumberLength(value)) {
      setErrorState(true);
      setErrorText(VALIDATION_MESSAGES.invalidCardNumberLength);

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
