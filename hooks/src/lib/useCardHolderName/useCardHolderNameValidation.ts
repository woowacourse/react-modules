import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

import { INPUT_RULES, VALIDATION_MESSAGES } from "../constants/card-custom-hook";

const useCardHolderNameValidation = () => {
  const [errorState, setErrorState] = useState(false);

  const [errorText, setErrorText] = useState("");

  const validateCardHolderName = (value: string) => {
    if (!cardInputValidator.validateAlphabetInput(value)) {
      setErrorText(VALIDATION_MESSAGES.onlyEnglishAllowed);
      setErrorState(true);

      return false;
    }

    if (
      !cardInputValidator.validateNumberInRange(
        value.length,
        INPUT_RULES.minCardHolderNameLength,
        INPUT_RULES.maxCardHolderNameLength
      )
    ) {
      setErrorText(VALIDATION_MESSAGES.invalidHolderName);
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
    validateCardHolderName,
  };
};

export default useCardHolderNameValidation;
