import { CARD_BRAND } from "../constants/cardBrand";

type CardBrandType = keyof typeof CARD_BRAND;

export const getCardBrand = (value: string): CardBrandType => {
  for (const brand in CARD_BRAND) {
    const condition = CARD_BRAND[brand as CardBrandType].condition;
    if (condition && condition(value)) {
      return brand as CardBrandType;
    }
  }
  return "none";
};

export const formatCardNumber = (
  cardNumber: string,
  brand: CardBrandType,
  pattern: number[] | never[]
): string => {
  let start = 0;

  if (brand === "none") {
    return cardNumber;
  }

  return pattern
    .map((len) => {
      const number = cardNumber.slice(start, start + len);
      start += len;
      return number;
    })
    .join(" ")
    .trim();
};

export const numberRegex = /^[0-9]*$/;

export const isExceedCardNumberLength = (
  value: string,
  cardNumberLength: number | null
): boolean => {
  return cardNumberLength !== null && value.length > cardNumberLength;
};

export const isShortOfCardNumberLength = (
  value: string,
  cardNumberLength: number | null
): boolean => {
  return cardNumberLength !== null && value.length < cardNumberLength;
};
