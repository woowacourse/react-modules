import { useState } from "react";
import useCardNumberValidation from "./validation/useCardNumberValidation";

type CardNumberName =
  | "cardNumber1"
  | "cardNumber2"
  | "cardNumber3"
  | "cardNumber4";

const useCardNumberInput = () => {
  const { cardNumberValidation, isCardNumberValid } = useCardNumberValidation();

  const [cardNumber, setCardNumber] = useState({
    value: {
      cardNumber1: "",
      cardNumber2: "",
      cardNumber3: "",
      cardNumber4: "",
    },
    ...cardNumberValidation,
  });

  const handleCardNumberChange = (value: string, name: CardNumberName) => {
    if (isCardNumberValid(value, name)) return;
    setCardNumber({
      errorMessage: { ...cardNumber.value, [name]: "" },
      isError: { ...cardNumber.isError, [name]: false },
      value: { ...cardNumber.value, [name]: value },
    });
  };

  return { cardNumber, handleCardNumberChange };
};

export default useCardNumberInput;
