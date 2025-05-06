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
  const cardBrandRules = Object.entries(CARD_BRAND_RULE) as [
    CardBrand,
    CardBrandRule
  ][];
  const findCardBrand = cardBrandRules.find(([_, { ranges }]) =>
    ranges.some(([start, end]) => isInCardNumberRange(cardNumber, start, end))
  );

  return findCardBrand?.[0] ?? null;
};

export const formatCardNumber = (cardNumber: string, cardBrand: CardBrand) => {
  const { formatNumbers: format } = CARD_BRAND_RULE[cardBrand];
  let indexStart = 0;
  return format
    .map((formatNumber) => {
      const indexEnd = indexStart + formatNumber;
      const part = cardNumber.slice(indexStart, indexEnd);
      indexStart += formatNumber;
      return part;
    })
    .filter(Boolean)
    .join("-");
};
