import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

import { INPUT_RULES, VALIDATION_MESSAGES } from "../constants/cardCustomHook";

const useExpiryMonthValidation = () => {
  const [errorState, setErrorState] = useState<boolean>(false);

  const [errorText, setErrorText] = useState("");

  const validateExpiryMonth = (value: string): boolean => {
    const isNumericInput = cardInputValidator.validateNumericInput(value);

    if (!isNumericInput) {
      setErrorText(VALIDATION_MESSAGES.onlyNumbersAllowed);
      setErrorState(true);

      return false;
    }

    const isOverInputLength = value.length > INPUT_RULES.maxExpiryDateLength;

    if (isOverInputLength) return false;

    if (!cardInputValidator.validateMonth(value)) {
      setErrorText(VALIDATION_MESSAGES.invalidMonthRange);
      setErrorState(true);

      return true;
    }

    setErrorText("");
    setErrorState(false);

    return true;
  };

  return {
    errorState,
    setErrorState,
    errorText,
    validateExpiryMonth,
  };
};

export default useExpiryMonthValidation;
