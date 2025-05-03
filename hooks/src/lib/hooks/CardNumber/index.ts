import { useState } from "react";
import { INITIAL_CARD_NUMBER_STATE } from "./constants";
import { CardNumberKey, CardNumberState } from "./types";
import { getCardNumbersError } from "./utils";

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
    errorState: getCardNumbersError(cardNumberState),
  };
};

export default useCardNumber;
