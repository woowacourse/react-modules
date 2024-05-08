import { useState } from "react";
import { ValidationResult } from "../../type";
import { ERROR_MESSAGE } from "../constants/errorMessage";

type UseCardIssuerResult = {
  cardIssuer: string;
  handleCardIssuerChange: (value: string) => void;
  cardIssuerValidation: ValidationResult;
};

export default function useCardIssuer(): UseCardIssuerResult {
  const [cardIssuer, setCardIssuer] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  function validateCardIssuer(value: string): ValidationResult {
    // 인풋을 클릭했지만 아무런 입력이 없다면 에러 발생
    if (isTouched && value === "") {
      return { isValid: false, errorMessage: ERROR_MESSAGE.NO_INPUT };
    }

    return { isValid: true };
  }

  function handleCardIssuerChange(value: string) {
    if (!isTouched) setIsTouched(true);
    setCardIssuer(value);
  }

  return {
    cardIssuer,
    handleCardIssuerChange,
    cardIssuerValidation: validateCardIssuer(cardIssuer),
  };
}
