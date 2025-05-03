import { ErrorState } from "../../../types";
import { CardNumberState } from "../types";

export const getCardNumbersError = (
  cardNumbers: CardNumberState
): ErrorState => {
  for (const { value } of Object.values(cardNumbers)) {
    const error = getCardNumberError(value);
    if (!error.isValid) {
      return error;
    }
  }

  return { isValid: true, errorMessage: "" };
};

const getCardNumberError = (cardNumber: string): ErrorState => {
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
