import { useState } from "react";
import { ValidationResult } from "../../type";
import { ERROR_MESSAGE } from "../constants/errorMessage";

type CardNumbers = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

type TouchedState = {
  [key in keyof CardNumbers]: boolean;
};

type UseCardNumberResult = {
  cardNumbers: CardNumbers;
  handleCardNumbersChange: (option: keyof CardNumbers, value: string) => void;
  cardNumbersValidation: ValidationResult;
};

export function useCardNumber(): UseCardNumberResult {
  const [cardNumbers, setCardNumbers] = useState<CardNumbers>({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [isTouched, setIsTouched] = useState<TouchedState>({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });

  function validateCardNumbers(cardNumbers: CardNumbers): ValidationResult {
    for (const key in cardNumbers) {
      if (isTouched[key as keyof TouchedState]) {
        const inputValue = cardNumbers[key as keyof CardNumbers];
        // 인풋을 클릭했지만 아무런 입력이 없다면 에러 발생
        if (inputValue === "") {
          return { isValid: false, errorMessage: ERROR_MESSAGE.NO_INPUT };
        }

        // 입력된 문자열이 숫자가 아니라면 에러 발생
        if (!/^\d+$/.test(inputValue)) {
          return { isValid: false, errorMessage: ERROR_MESSAGE.CARD__NUMBER.INVALID_NUMBERS };
        }

        // 입력된 문자열이 1부터 9999 사이의 4자리가 아니라면 에러 발생
        if (!/^\d{4}$/.test(inputValue)) {
          return { isValid: false, errorMessage: ERROR_MESSAGE.CARD__NUMBER.MAX_LENGTH_EXCEEDED };
        }
      }
    }

    return { isValid: true };
  }

  function handleCardNumbersChange(option: keyof CardNumbers, value: string) {
    if (!isTouched[option])
      setIsTouched((prev) => ({
        ...prev,
        [option]: true,
      }));
    setCardNumbers((prev) => ({ ...prev, [option]: value }));
  }

  return {
    cardNumbers,
    handleCardNumbersChange,
    cardNumbersValidation: validateCardNumbers(cardNumbers),
  };
}
