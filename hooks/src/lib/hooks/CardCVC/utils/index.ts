import { ValidationResult } from "../../../types";

export const validateCardCVC = (cvc: string): ValidationResult => {
  if (isNaN(Number(cvc))) {
    return {
      isValid: false,
      errorMessage: "숫자만 입력해주세요.",
    };
  }

  if (cvc.length !== 3) {
    return {
      isValid: false,
      errorMessage: "CVC는 3자리여야 합니다.",
    };
  }
  return {
    isValid: true,
    errorMessage: "",
  };
};
