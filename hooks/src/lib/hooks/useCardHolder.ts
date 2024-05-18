import { useMemo, useState } from "react";
import { ValidationResult } from "../../type";
import { ERROR_MESSAGE } from "../constants/errorMessage";

export function useCardHolder() {
  const [cardHolder, setCardHolder] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  function validateCardHolder(value: string): ValidationResult {
    // 인풋을 클릭했지만 아무런 입력이 없다면 에러 발생
    if (isTouched && value === "") {
      return { isValid: false, errorMessage: ERROR_MESSAGE.NO_INPUT };
    }

    // 입력된 문자열이 영어 대문자와 공백이 아니라면 에러 발생
    if (!/^[A-Z\s]+$/.test(value) && isTouched) {
      return {
        isValid: false,
        errorMessage: ERROR_MESSAGE.CARD_HOLDER.INVALID_CHARACTERS,
      };
    }

    // 입력된 문자열의 길이가 공백 포함 15글자를 넘어가면 에러 발생
    if (value.length > 15 && isTouched) {
      return {
        isValid: false,
        errorMessage: ERROR_MESSAGE.CARD_HOLDER.MAX_LENGTH_EXCEEDED,
      };
    }

    return { isValid: true, errorMessage: "" };
  }

  function handleCardHolderChange(value: string) {
    if (!isTouched) setIsTouched(true);
    setCardHolder(value);
  }

  const cardHolderValidationResult = useMemo(
    () => validateCardHolder(cardHolder),
    [cardHolder, isTouched]
  );

  return { cardHolder, handleCardHolderChange, cardHolderValidationResult };
}
