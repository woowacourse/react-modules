import { CardBrand, CardBrandType } from "../types/cardBrand";
import { CARD_RULES } from "../constants/cardRules";
import { isLengthEqual } from "./validation";

export const getCardBrand = (value: string): CardBrandType => {
  for (const [brand, rule] of Object.entries(CARD_RULES)) {
    if (isLengthEqual(value, rule.maxLength) && rule.validator(value)) {
      return brand as CardBrand;
    }
  }

  return null;
};
