import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

import { VALIDATION_MESSAGES } from "../constants/card-custom-hook";

const useCardHolderNameValidation = () => {
  const [errorState, setErrorState] = useState(false);

  const [errorText, setErrorText] = useState("");

  const validateCardHolderName = (value: string) => {
    const isAlphabetInputValid =
      cardInputValidator.validateAlphabetInput(value);

    if (!isAlphabetInputValid) {
      setErrorText(VALIDATION_MESSAGES.onlyEnglishAllowed);
      setErrorState(!isAlphabetInputValid);

      return false;
    }

    const isValidCardHolderNameLength =
      cardInputValidator.validateNumberInRange(value.length, 1, 15);

    if (!isValidCardHolderNameLength) {
      setErrorText(VALIDATION_MESSAGES.invalidHolderName);
      setErrorState(!isValidCardHolderNameLength);

      return true;
    }

    setErrorState(false);
    setErrorText("");
    return true;
  };

  return {
    errorState,
    errorText,
    validateCardHolderName,
  };
};

export default useCardHolderNameValidation;
