import { useState } from "react";
import { INITIAL_CARD_NUMBER_STATE } from "./constants";
import { CardNumberKey, CardNumberState } from "./types";
import { validateCardNumbers } from "./utils";

const useCardNumber = (
  initialState: CardNumberState = INITIAL_CARD_NUMBER_STATE
) => {
  const [cardNumberState, setCardNumberState] =
    useState<CardNumberState>(initialState);

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
