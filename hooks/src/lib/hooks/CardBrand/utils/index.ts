import { getErrorByRules } from "@utils/validation";
import { ErrorState, ValidationRule } from "@/types";
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

export const formatCardNumber = (cardNumber: string, cardBrand: CardBrand) => {
  const cleanCardNumber = cardNumber.replace(/-/g, "");
  const { formatNumbers: format } = CARD_BRAND_RULE[cardBrand];
  let indexStart = 0;

  return format
    .map((formatNumber) => {
      const indexEnd = indexStart + formatNumber;
      const part = cleanCardNumber.slice(indexStart, indexEnd);
      indexStart += formatNumber;
      return part;
    })
    .filter(Boolean)
    .join("-");
};

const cardBrandConditions = {
  checkCardBrand: (cardBrand: CardBrand | null) => Boolean(cardBrand),
};

const cardBrandValidationRules: ValidationRule<CardBrand | null>[] = [
  {
    condition: cardBrandConditions.checkCardBrand,
    errorMessage: "현재 카드 번호에 일치하는 카드사가 존재하지 않습니다.",
  },
];

export const getCardBrandError = (cardBrand: CardBrand | null): ErrorState => {
  return getErrorByRules(cardBrand, cardBrandValidationRules);
};
