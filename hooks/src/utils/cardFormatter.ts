import { CardBrandType } from "../types/cardBrand";
import { CARD_RULES } from "../constants/cardRules";

export const formatByBrand = (
  cardBrand: CardBrandType,
  value: string
): string[] => {
  if (!cardBrand || !CARD_RULES[cardBrand]) return [];

  const segments = CARD_RULES[cardBrand].segments;

  return segments.map((segmentLength, index) => {
    const startIndex = segments
      .slice(0, index)
      .reduce((sum, length) => sum + length, 0);

    return value.slice(startIndex, startIndex + segmentLength);
  });
};
