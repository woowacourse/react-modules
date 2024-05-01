import { useState, ChangeEvent } from "react";
import { validateCardNumber } from "../validators/newCardInputValidator";

const useCardNumbers = (cardNumbersLength: number) => {
  const [cardNumbersInfo, setCardNumbersInfo] = useState({
    cardNumbers: "",
    isError: false,
  });
  const handleCardNumbers = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isError = validateCardNumber(value, cardNumbersLength);

    setCardNumbersInfo((prev) => {
      return {
        ...prev,
        cardNumbers: value,
      };
    });

    if (isError) {
      setCardNumbersInfo((prev) => {
        return {
          ...prev,
          isError: true,
        };
      });
      return;
    }

    setCardNumbersInfo((prev) => {
      return {
        ...prev,
        isError: false,
      };
    });
  };

  return {
    cardNumbersInfo,
    handleCardNumbers,
  };
};

export default useCardNumbers;
