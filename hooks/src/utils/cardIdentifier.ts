import { CardBrand, CardBrandType } from "../types/cardBrand";
import { isLengthEqual } from "./validation";

const CARD_NUMBER_MAX_LENGTH: Record<CardBrand, number> = {
  visa: 16,
  masterCard: 16,
  diners: 14,
  amex: 15,
  unionPay: 16,
};

export const getCardBrand = (value: string): CardBrandType => {
  if (isLengthEqual(value, CARD_NUMBER_MAX_LENGTH.visa) && /^4/.test(value)) {
    return "visa";
  }

  if (
    isLengthEqual(value, CARD_NUMBER_MAX_LENGTH.masterCard) &&
    /^5[1-5]/.test(value)
  ) {
    return "masterCard";
  }

  if (
    isLengthEqual(value, CARD_NUMBER_MAX_LENGTH.diners) &&
    /^36/.test(value)
  ) {
    return "diners";
  }

  if (
    isLengthEqual(value, CARD_NUMBER_MAX_LENGTH.amex) &&
    /^3[47]/.test(value)
  ) {
    return "amex";
  }

  const prefix3 = Number(value.slice(0, 3));
  const prefix4 = Number(value.slice(0, 4));
  const prefix6 = Number(value.slice(0, 6));

  if (
    isLengthEqual(value, CARD_NUMBER_MAX_LENGTH.unionPay) &&
    ((prefix6 >= 622126 && prefix6 <= 622925) ||
      (prefix3 >= 624 && prefix3 <= 626) ||
      (prefix4 >= 6282 && prefix4 <= 6288))
  ) {
    return "unionPay";
  }

  return null;
};
