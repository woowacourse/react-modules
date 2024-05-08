import { useState } from "react";
import useCardNumberValidation from "./validation/useCardNumberValidation";

type CardNumberName = "cardNumber";

const useCardNumberInput = () => {
  const { getCardNumberErrorState } = useCardNumberValidation();

  const [cardNumber, setCardNumber] = useState({
    value: {
      cardNumber: "",
    },
    errorMessage: { cardNumber: "" },
    isError: { cardNumber: false },
  });

  const handleCardNumberChange = (value: string, name: CardNumberName) => {
    const errorState = getCardNumberErrorState(value);
    if (errorState) {
      setCardNumber({
        value: { cardNumber: cardNumber.value.cardNumber },
        ...errorState,
      });
      return;
    }
    setCardNumber({
      errorMessage: { ...cardNumber.value, [name]: "" },
      isError: { ...cardNumber.isError, [name]: false },
      value: { ...cardNumber.value, [name]: value },
    });
  };

  return { cardNumber, handleCardNumberChange };
};

export default useCardNumberInput;
