import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

import {
  INPUT_RULES,
  VALIDATION_MESSAGES,
} from "../constants/card-custom-hook";

const useCardPasswordValidation = () => {
  const [errorState, setErrorState] = useState(false);

  const [errorText, setErrorText] = useState("");

  const validateCardPassword = (value: string) => {
    const isNumericInputValid = cardInputValidator.validateNumericInput(value);

    if (!isNumericInputValid) {
      setErrorText(VALIDATION_MESSAGES.onlyNumbersAllowed);
      setErrorState(!isNumericInputValid);

      return false;
    }

    const isValidCardPasswordLength = cardInputValidator.validateInputLength(
      value,
      INPUT_RULES.validCardPasswordNumberLength
    );

    if (!isValidCardPasswordLength) {
      setErrorText(VALIDATION_MESSAGES.invalidCardPassword);
      setErrorState(!isValidCardPasswordLength);

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
