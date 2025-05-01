import { useState } from "react";
import { INITIAL_CARD_NUMBER_STATE } from "./constants";
import { CardNumberKey, CardNumberState } from "./types";
import { validateCardNumber } from "./utils";
import { ValidationResult } from "@types";

const validateCardNumbers = (cardNumber: CardNumberState) => {
  let errorState: ValidationResult = {
    isValid: true,
    errorMessage: "",
  };

  Object.values(cardNumber).every(({ value }) => {
    console.log(cardNumber);

    const { isValid, errorMessage } = validateCardNumber(value);
    errorState = { isValid, errorMessage };

    if (!isValid) {
      return false;
    }
    return true;
  });
  return errorState;
};

const useCardNumber = () => {
  const [cardNumberState, setCardNumberState] = useState<CardNumberState>(
    INITIAL_CARD_NUMBER_STATE
  );

  const handleCardNumberChange = (key: CardNumberKey, value: string) => {
    if (value.length > 4) {
      return;
    }

    setCardNumberState((prevState) => ({
      ...prevState,
      [key]: {
        value,
      },
    }));
  };

  return {
    cardNumberState,
    handleCardNumberChange,
    errorState: validateCardNumbers(cardNumberState),
  };
};

export default useCardNumber;
