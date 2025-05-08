import { ValidationResult } from "../../../types";

export const validateCardNumbers = (cardNumber: string, cardType: string) => {
  const result = validateCardNumber(cardNumber, cardType);
  return result;
};

export const validateCardNumber = (
  cardNumber: string,
  cardType: string
): ValidationResult => {
  if (!/^\d+$/.test(cardNumber)) {
    return {
      isValid: false,
      errorMessage: "숫자만 입력해주세요.",
    };
  }

  if (cardType === "diners") {
    if (cardNumber.length !== 14) {
      return {
        isValid: false,
        errorMessage: "Diners 카드 번호는 14자리여야 합니다.",
      };
    }
  }

  if (cardType === "amex") {
    if (cardNumber.length !== 15) {
      return {
        isValid: false,
        errorMessage: "AMEX 카드 번호는 15자리여야 합니다.",
      };
    }
  }

  if (cardType === "unionpay") {
    if (cardNumber.length !== 16) {
      return {
        isValid: false,
        errorMessage: "UnionPay 카드 번호는 16자리여야 합니다.",
      };
    }
  }

  return {
    isValid: true,
    errorMessage: "",
  };
};
