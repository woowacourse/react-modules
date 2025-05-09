import { CardBrand, CardBrandType } from "../types/cardBrand";

const CARD_FORMAT_SEGMENTS: Record<CardBrand, number[]> = {
  visa: [4, 4, 4, 4],
  masterCard: [4, 4, 4, 4],
  diners: [4, 6, 4],
  amex: [4, 6, 5],
  unionPay: [4, 4, 4, 4],
};

export const formatByBrand = (
  cardBrand: CardBrandType,
  value: string
): string[] => {
  if (!cardBrand) return [];

  const formatInfo = CARD_FORMAT_SEGMENTS[cardBrand];
  if (!formatInfo) return [];

  return formatInfo.map((segmentLength, index) => {
    const startIndex = formatInfo
      .slice(0, index)
      .reduce((sum, length) => sum + length, 0);

    return value.slice(startIndex, startIndex + segmentLength);
  });
};
