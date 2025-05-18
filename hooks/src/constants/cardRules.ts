import { CardBrand } from "../types/cardBrand";

interface CardRule {
  maxLength: number;
  segments: number[];
  validator: (cardNumber: string) => boolean;
}

export const CARD_RULES: Record<CardBrand, CardRule> = {
  visa: {
    maxLength: 16,
    segments: [4, 4, 4, 4],
    validator: (cardNumber: string) => /^4/.test(cardNumber),
  },
  masterCard: {
    maxLength: 16,
    segments: [4, 4, 4, 4],
    validator: (cardNumber: string) => /^5[1-5]/.test(cardNumber),
  },
  diners: {
    maxLength: 14,
    segments: [4, 6, 4],
    validator: (cardNumber: string) => /^36/.test(cardNumber),
  },
  amex: {
    maxLength: 15,
    segments: [4, 6, 5],
    validator: (cardNumber: string) => /^3[47]/.test(cardNumber),
  },
  unionPay: {
    maxLength: 16,
    segments: [4, 4, 4, 4],
    validator: (cardNumber: string) => {
      const prefix3 = Number(cardNumber.slice(0, 3));
      const prefix4 = Number(cardNumber.slice(0, 4));
      const prefix6 = Number(cardNumber.slice(0, 6));

      return (
        (prefix6 >= 622126 && prefix6 <= 622925) ||
        (prefix3 >= 624 && prefix3 <= 626) ||
        (prefix4 >= 6282 && prefix4 <= 6288)
      );
    },
  },
};
