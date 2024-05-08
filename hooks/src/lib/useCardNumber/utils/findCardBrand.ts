import { getObjectKeys } from "../../utils/getObjectKeys";

export function findCardBrand(cardNumber: string): CardBrand {
  const cardBrands = getObjectKeys(CARD_BRANDS);

  const foundCardBrand = cardBrands.find((cardBrand) => {
    const { testPrefix, length } = cardBrandRule[cardBrand];
    return testPrefix(cardNumber) && cardNumber.length <= length;
  });

  return foundCardBrand || "unknown";
}

type CardBrand = (typeof CARD_BRANDS)[keyof typeof CARD_BRANDS] | "unknown";
export const CARD_BRANDS = {
  Diners: "Diners",
  AMEX: "AMEX",
  UnionPay: "UnionPay",
  MasterCard: "MasterCard",
  Visa: "Visa",
} as const;

interface CardBrandCondition {
  [key: string]: {
    testPrefix: (cardNumber: string) => boolean;
    length: number;
  };
}

export const cardBrandRule: CardBrandCondition = {
  Diners: {
    testPrefix: (cardNumber: string) => /^36/.test(cardNumber),
    length: 14,
  },
  AMEX: {
    testPrefix: (cardNumber: string) => /^3[47]/.test(cardNumber),
    length: 15,
  },
  UnionPay: {
    // 624~626로 시작 or 6282~6288로 시작 or 622126~622925로 시작
    testPrefix: (cardNumber: string) => {
      const firstConditionMet = /^62[4-6]/.test(cardNumber);
      const secondConditionMet = /^628[2-8]/.test(cardNumber);

      const firstSixDigits = parseInt(cardNumber.slice(0, 6), 10);
      const thirdConditionMet = firstSixDigits >= 622126 && firstSixDigits <= 622925;

      return firstConditionMet || secondConditionMet || thirdConditionMet;
    },
    length: 16,
  },
  MasterCard: {
    testPrefix: (cardNumber: string) => /^5[1-5]/.test(cardNumber),
    length: 16,
  },
  Visa: {
    testPrefix: (cardNumber: string) => /^4/.test(cardNumber),
    length: 16,
  },
};
