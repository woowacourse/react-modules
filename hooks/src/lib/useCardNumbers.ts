import { useState, ChangeEvent } from "react";
import { validateCardNumber } from "../validators/cardInputValidator";

const useCardNumbers = (cardNumbersLength: number) => {
  const [cardNumbersInfo, setCardNumbersInfo] = useState({
    cardNumbers: "",
    isValid: false,
  });

  const handleCardNumbers = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isValid = validateCardNumber(value, cardNumbersLength);

    setCardNumbersInfo((prev) => {
      return {
        ...prev,
        cardNumbers: value,
        isValid,
      };
    });
  };

  return {
    cardNumbersInfo,
    handleCardNumbers,
  };
};

export default useCardNumbers;
