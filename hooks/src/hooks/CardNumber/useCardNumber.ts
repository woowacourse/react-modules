import { useRef, useState } from "react";
import { INITIAL_CARD_NUMBER_STATE } from "./constants";
import { CardNumberKey, CardNumberState } from "./types";
import { validateCardNumber } from "./utils";

const useCardNumber = () => {
  const [cardNumberState, setCardNumberState] = useState<CardNumberState>(
    INITIAL_CARD_NUMBER_STATE
  );
  const changeKey = useRef<CardNumberKey | null>(null);

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
    changeKey.current = key;
  };

  return {
    cardNumberState,
    handleCardNumberChange,
    errorState: changeKey.current
      ? validateCardNumber(cardNumberState[changeKey.current].value)
      : { isValid: true, errorMessage: "" },
  };
};

export default useCardNumber;
