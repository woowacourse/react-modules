import { ValidationResult } from "../../../types";

const CARD_TYPES = {
  diners: {
    displayName: "Diners",
    numberLength: 14,
  },
  amex: {
    displayName: "AMEX",
    numberLength: 15,
  },
  visa: {
    displayName: "Visa",
    numberLength: 16,
  },
  mastercard: {
    displayName: "MasterCard",
    numberLength: 16,
  },
  unionpay: {
    displayName: "UnionPay",
    numberLength: 16,
  },
  unknown: {
    displayName: "알 수 없는 카드",
    numberLength: 16,
  },
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

  if (cardType in CARD_TYPES) {
    const { displayName, numberLength } =
      CARD_TYPES[cardType as keyof typeof CARD_TYPES];
    if (cardNumber.length !== numberLength) {
      return {
        isValid: false,
        errorMessage: `${displayName} 카드 번호는 ${numberLength}자리여야 합니다.`,
      };
    }
  }

  return {
    isValid: true,
    errorMessage: "",
  };
};
