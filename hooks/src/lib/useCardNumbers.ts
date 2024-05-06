import { useState, ChangeEvent } from "react";
import { COMMON_ERROR, CARD_NUMBER } from "./constants/validation";
import {
  isValidNumberValue,
  validateCardNumberLength,
} from "../validators/cardInputValidator";

interface CardNumberInfo {
  cardNumber: string;
  isValid: boolean;
  errorMessages: string[];
}

const useCardNumbers = (cardNumberLength: number) => {
  const [cardNumberInfo, setCardNumberInfo] = useState<CardNumberInfo>({
    cardNumber: "",
    isValid: false,
    errorMessages: [],
  });

  const handleCardNumbers = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const errorMessages: string[] = [];

    const isValidNumber = isValidNumberValue(value);
    if (!isValidNumber) {
      errorMessages.push(COMMON_ERROR.notNumeric);
    }

    const isValidCardNumberLength = validateCardNumberLength(
      value,
      cardNumberLength
    );
    if (!isValidCardNumberLength) {
      errorMessages.push(
        CARD_NUMBER.errorMessage.invalidLength(cardNumberLength)
      );
    }

    setCardNumberInfo({
      cardNumber: value,
      isValid: isValidNumber && isValidCardNumberLength,
      errorMessages,
    });
  };

  return {
    cardNumberInfo,
    handleCardNumbers: handleCardNumbers,
  };
};

export default useCardNumbers;
