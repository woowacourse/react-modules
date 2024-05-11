import { useState } from "react";
import { ValidationResult } from "../../type";
import { ERROR_MESSAGE } from "../constants/errorMessage";
import identifyCard, { CardIdentifier } from "../util/cardIdentifier";
import cardNumberFormatter from "../util/cardNumberFormatter";

export const useCardNumber = () => {
  const [cardNumbers, setCardNumber] = useState<string>("");
  const [isTouched, setIsTouched] = useState(false);
  const [_, setCardIdentifier] = useState<CardIdentifier>();

  const cardNumbersValidation = (cardNumber: string): ValidationResult => {
    if (isTouched) {
      // 인풋을 클릭했지만 아무런 입력이 없다면 에러 발생
      if (cardNumber === "") {
        return { isValid: false, errorMessage: ERROR_MESSAGE.NO_INPUT };
      }

      // 입력된 문자열이 숫자가 아니라면 에러 발생
      if (!/^[\d\s]+$/.test(cardNumber)) {
        return { isValid: false, errorMessage: ERROR_MESSAGE.CARD__NUMBER.INVALID_NUMBERS };
      }
    }

    return { isValid: true, errorMessage: "" };
  };

  const handleCardNumberChange = (value: string) => {
    if (!isTouched) setIsTouched(true);
    const cardBrand = identifyCard(value);
    setCardIdentifier(cardBrand);
    const numbersFormatted = cardNumberFormatter(value, cardBrand);
    setCardNumber(numbersFormatted);
  };

  return { cardNumbers, handleCardNumberChange, cardNumbersValidation };
};
