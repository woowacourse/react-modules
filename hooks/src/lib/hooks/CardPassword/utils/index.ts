import { ErrorState } from "../../../types";

export const getCardPasswordError = (secretNumber: string): ErrorState => {
  if (isNaN(Number(secretNumber))) {
    return {
      isValid: false,
      errorMessage: "숫자만 입력해주세요.",
    };
  }

  if (secretNumber.length !== 2) {
    return {
      isValid: false,
      errorMessage: "비밀번호는 2자리여야 합니다.",
    };
  }

  return {
    isValid: true,
    errorMessage: "",
  };
};
