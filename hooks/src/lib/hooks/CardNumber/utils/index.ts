import { ValidationResult } from "../../../types";
import { CardNumberState } from "../types";

export const validateCardNumbers = (cardNumber: CardNumberState) => {
  let errorState: ValidationResult = {
    isValid: true,
    errorMessage: "",
  };

  Object.values(cardNumber).every(({ value }) => {
    const { isValid, errorMessage } = validateCardNumber(value);
    errorState = { isValid, errorMessage };

    if (!isValid) {
      return false;
    }
    return true;
  });
  return errorState;
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
