import { useState } from "react";

import useCardNumberValidation from "./useCardNumbersValidation";

import { CardNumberKeys } from "../types/card-custom-hook";
import { INPUT_RULES } from "../constants/card-custom-hook";

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState<Record<CardNumberKeys, string>>({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const { errorState, errorText, validateCardNumber } = useCardNumberValidation();

  const updateCardNumber = (name: string, value: string) => {
    setCardNumbers((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as {
      name: CardNumberKeys;
      value: string;
    };

    const cardCardNumberUpdate = validateCardNumber(name, value);

    if (!cardCardNumberUpdate) return;

    updateCardNumber(name, value);
  };

  const isCardNumberInputCompleted = Object.values(cardNumbers).every((cardNumber) => cardNumber.length === INPUT_RULES.maxCardNumberInputLength);

  return {
    cardNumbers,
    isCardNumberInputCompleted,
    errorState,
    errorText,
    handleCardNumberChange,
  };
};

export default useCardNumbers;
