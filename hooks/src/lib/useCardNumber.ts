import { useState } from "react";
import cardNumberValidation from "./cardNumberValidation";
import { CardNumber } from "./types/Card";
import { getCardType } from "./getCardType";

const defaultCardNumber = {
  first: "",
  second: "",
  third: "",
  fourth: "",
};

function useCardNumber() {
  const [cardNumber, setCardNumber] = useState(defaultCardNumber);

  function handleCardNumber(value: string, position: keyof CardNumber) {
    setCardNumber((prev) => ({ ...prev, [position]: value }));
  }

  const cardType = getCardType(cardNumber);
  const { isCardNumberError, errorText } = cardNumberValidation(cardNumber);

  return { cardNumber, handleCardNumber, isCardNumberError, errorText };
}

export default useCardNumber;
