import { useState } from "react";
import { ValidationResult } from "../../type";
import { ERROR_MESSAGE } from "../constants/errorMessage";

type UsePasswordResult = {
  cardPassword: string;
  handleCardPasswordChange: (value: string) => void;
  cardPasswordValidation: ValidationResult;
};

export function usePassword(): UsePasswordResult {
  const [cardPassword, setCardPassword] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  function validatePassword(value: string): ValidationResult {
    // 인풋을 클릭했지만 아무런 입력이 없다면 에러 발생
    if (isTouched && value === "") {
      return { isValid: false, errorMessage: ERROR_MESSAGE.NO_INPUT };
    }

    // 입력된 문자열이 숫자가 아니라면 에러 발생
    if (!/^\d+$/.test(value) && isTouched) {
      return { isValid: false, errorMessage: ERROR_MESSAGE.CARD_PASSWORD.INVALID_NUMBERS };
    }

    // 입력된 문자열이 1부터 99 사이의 2자리가 아니라면 에러 발생
    if (!/^\d{2}$/.test(value) && isTouched) {
      return { isValid: false, errorMessage: ERROR_MESSAGE.CARD_PASSWORD.MAX_LENGTH_EXCEEDED };
    }

    return { isValid: true };
  }

  function handleCardPasswordChange(value: string) {
    if (!isTouched) setIsTouched(true);
    setCardPassword(value);
  }

  return {
    cardPassword,
    handleCardPasswordChange,
    cardPasswordValidation: validatePassword(cardPassword),
  };
}
