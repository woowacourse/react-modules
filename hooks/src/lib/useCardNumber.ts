import { useState } from "react";
import cardNumberValidation from "./cardNumberValidation";
type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

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

  const { isCardNumberError, errorText } = cardNumberValidation(cardNumber);

  return { cardNumber, handleCardNumber, isCardNumberError, errorText };
}

export default useCardNumber;
