import { ErrorState } from "../../../types";
import { CardNumberState } from "../types";

export const getCardNumbersError = (cardNumber: CardNumberState) => {
  let errorState: ErrorState = {
    isValid: true,
    errorMessage: "",
  };

  Object.values(cardNumber).every(({ value }) => {
    console.log(cardNumber);

    const { isValid, errorMessage } = getCardNumberError(value);
    errorState = { isValid, errorMessage };

    if (!isValid) {
      return false;
    }
    return true;
  });
  return errorState;
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
