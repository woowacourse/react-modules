import { CARD_BRAND_RULE } from "../constants";
import { CardBrand, CardBrandRule } from "../types";

const isInCardNumberRange = (
  cardNumber: string,
  start: number,
  end: number
) => {
  const prefixLength = start.toString().length;
  const prefix = parseInt(cardNumber.slice(0, prefixLength));
  return prefix >= start && prefix <= end;
};

export const getCardBrand = (cardNumber: string): CardBrand | null => {
  const cleanCardNumber = cardNumber.replace(/-/g, "");
  const cardBrandRules = Object.entries(CARD_BRAND_RULE) as [
    CardBrand,
    CardBrandRule
  ][];
  const findCardBrand = cardBrandRules.find(([_, { ranges }]) =>
    ranges.some(([start, end]) =>
      isInCardNumberRange(cleanCardNumber, start, end)
    )
  );

  return findCardBrand?.[0] ?? null;
};
