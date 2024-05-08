import { useState } from "react";
import { ValidationResult } from "../../type";
import { ERROR_MESSAGE } from "../constants/errorMessage";

type UseCardNumberResult = {
  cardNumbers: string;
  handleCardNumbersChange: (value: string) => void;
  cardNumbersValidation: ValidationResult;
};

export function useCardNumber(): UseCardNumberResult {
  const [cardNumbers, setCardNumbers] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  function validateCardNumbers(value: string): ValidationResult {
    // 인풋을 클릭했지만 아무런 입력이 없다면 에러 발생
    if (isTouched && value === "") {
      return { isValid: false, errorMessage: ERROR_MESSAGE.NO_INPUT };
    }

    // 입력된 문자열이 숫자가 아니라면 에러 발생
    if (isTouched && !/^\d+$/.test(value)) {
      return { isValid: false, errorMessage: ERROR_MESSAGE.CARD__NUMBER.INVALID_NUMBERS };
    }

    // 입력된 문자열이 14~16자리의 숫자가 아니라면 에러 발생
    if (isTouched && !/^\d{14,16}$/.test(value)) {
      return { isValid: false, errorMessage: ERROR_MESSAGE.CARD__NUMBER.INVALID_LENGTH };
    }

    return { isValid: true };
  }

  function handleCardNumbersChange(value: string) {
    if (!isTouched) setIsTouched(true);
    setCardNumbers(value);
  }

  return {
    cardNumbers,
    handleCardNumbersChange,
    cardNumbersValidation: validateCardNumbers(cardNumbers),
  };
}
