import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

import { INPUT_RULES, VALIDATION_MESSAGES } from "../constants/card-custom-hook";
import { CardNumberKeys } from "../types/card-custom-hook";

const useCardNumberValidation = () => {
  const [errorState, setErrorState] = useState<Record<CardNumberKeys, boolean>>({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  const [errorText, setErrorText] = useState<Record<CardNumberKeys, string>>({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const updateErrorState = (name: CardNumberKeys, validResult: boolean) => {
    setErrorState((prevErrorState) => {
      return {
        ...prevErrorState,
        [name]: validResult,
      };
    });
  };

  const updateErrorText = (name: CardNumberKeys, errorText: string) => {
    setErrorText((prevErrorText) => {
      return {
        ...prevErrorText,
        [name]: errorText,
      };
    });
  };

  const validateCardNumber = (name: CardNumberKeys, value: string) => {
    if (cardInputValidator.validateOverInputLength(value, INPUT_RULES.maxCardNumberInputLength)) return false;

    if (!cardInputValidator.validateNumericInput(value)) {
      updateErrorState(name, true);
      updateErrorText(name, VALIDATION_MESSAGES.onlyNumbersAllowed);

      return false;
    }

    if (!cardInputValidator.validateInputLength(value, INPUT_RULES.maxCardNumberInputLength)) {
      updateErrorState(name, true);
      updateErrorText(name, VALIDATION_MESSAGES.invalidCardNumberLength);

      return true;
    }

    updateErrorState(name, false);
    updateErrorText(name, "");

    return true;
  };

  return {
    errorState,
    errorText,
    validateCardNumber,
  };
};

export default useCardNumberValidation;
