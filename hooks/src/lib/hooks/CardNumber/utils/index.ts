import { ValidationResult } from "../../../types";
import { CardNumberState } from "../types";

export const validateCardNumbers = (cardNumber: CardNumberState) => {
  const invalidEntry = Object.values(cardNumber).find(({ value }) => {
    const result = validateCardNumber(value);
    return !result.isValid;
  });

  if (invalidEntry) {
    const { isValid, errorMessage } = validateCardNumber(invalidEntry.value);
    return { isValid, errorMessage };
  }

  return { isValid: true, errorMessage: "" };
};

const validateCardNumber = (cardNumber: string): ValidationResult => {
  if (isNaN(Number(cardNumber))) {
    return {
      isValid: false,
      errorMessage: "숫자만 입력해주세요.",
    };
  }

  if (cardNumber.length !== 4) {
    return {
      isValid: false,
      errorMessage: "카드 번호는 4자리여야 합니다.",
    };
  }

  return {
    isValid: true,
    errorMessage: "",
  };
};
