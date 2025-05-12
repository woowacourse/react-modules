import { useState } from "react";
import { getCardType } from "./getCardType";
import { cardNumberValidation } from "./cardNumberValidation";

function useCardNumber() {
  const [cardNumber, setCardNumber] = useState("");

  function handleCardNumber(value: string) {
    setCardNumber(value);
  }

  const cardType = getCardType(cardNumber);
  const { isCardNumberError, errorText } = cardNumberValidation(
    cardNumber,
    cardType
  );

  return {
    cardNumber,
    handleCardNumber,
    cardType,
    isCardNumberError,
    errorText,
  };
}

export default useCardNumber;
