import { useState } from "react";

import useCardNumberValidation from "./useCardNumbersValidation";

import { CardNumberKeys } from "../types/cardCustomHook";
import { INPUT_RULES } from "../constants/cardCustomHook";

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState<
    Record<CardNumberKeys, string>
  >({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const { errorState, errorText, validateCardNumber } =
    useCardNumberValidation();

  const updateCardNumber = (name: string, value: string) => {
    setCardNumbers((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    const canUpdate = validateCardNumber(name, value);

    if (!canUpdate) return;

    updateCardNumber(name, value);
  };

  const isCardNumberInputCompleted = Object.values(cardNumbers).every(
    (cardNumber) => cardNumber.length === INPUT_RULES.maxCardNumberLength
  );

  return {
    cardNumbers,
    isCardNumberInputCompleted,
    errorState,
    errorText,
    handleCardNumberChange,
  };
};

export default useCardNumbers;
