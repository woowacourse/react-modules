import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

import { VALIDATION_MESSAGES } from "../constants/card-custom-hook";

type CardNumberKeys = "first" | "second" | "third" | "fourth";

const useCardNumberValidation = () => {
  const [errorState, setErrorState] = useState<Record<CardNumberKeys, boolean>>(
    {
      first: false,
      second: false,
      third: false,
      fourth: false,
    }
  );

  const [errorText, setErrorText] = useState("");

  const updateErrorState = (name: string, validResult: boolean) => {
    setErrorState((prevErrorState) => {
      return {
        ...prevErrorState,
        [name]: validResult,
      };
    });
  };

  const validateCardNumber = (name: string, value: string) => {
    if (!cardInputValidator.validateNumericInput(value)) {
      updateErrorState(name, true);
      setErrorText(VALIDATION_MESSAGES.onlyNumbersAllowed);

      return false;
    }

    if (!cardInputValidator.validateCardNumberLength(value)) {
      updateErrorState(name, true);
      setErrorText(VALIDATION_MESSAGES.invalidCardNumberLength);

      return true;
    }

    updateErrorState(name, false);
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
