import { useState } from "react";
import { getCardType } from "./getCardType";
import { cardNumberValidation } from "./cardNumberValidation";
import { formatByCardType } from "./formatByCardType";

function useCardNumber() {
  const [cardNumber, setCardNumber] = useState("");

  const cardType = getCardType(cardNumber);
  const formatted = formatByCardType(cardNumber, cardType);

  function handleCardNumber(value: string) {
    setCardNumber(value);
  }

  const { isCardNumberError, errorText } = cardNumberValidation(
    cardNumber,
    cardType
  );

  return {
    cardNumber: formatted,
    handleCardNumber,
    cardType,
    isCardNumberError,
    errorText,
  };
}

export default useCardNumber;
