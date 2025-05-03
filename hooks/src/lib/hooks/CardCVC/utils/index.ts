import { ErrorState } from "../../../types";

export const getCardCVCError = (cvc: string): ErrorState => {
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
