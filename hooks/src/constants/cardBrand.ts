import { CardBrandName } from "@/types/cardBrand";

export interface CardBrandInfo {
  name: CardBrandName;
  cardNumbersFormat: number[];
  validLength: number;
  identifierRange?: number[][];
  identifier?: number;
}

export const cardBrandsInfo: Record<CardBrandName, CardBrandInfo> = {
  VISA: {
    name: "VISA",
    cardNumbersFormat: [4, 4, 4, 4],
    validLength: 16,
    identifier: 4,
  },
  MASTER_CARD: {
    name: "MASTER_CARD",
    cardNumbersFormat: [4, 4, 4, 4],
    validLength: 16,
    identifierRange: [[51, 55]],
  },
  AMEX: {
    name: "AMEX",
    cardNumbersFormat: [4, 6, 5],
    validLength: 15,
    identifier: 34 | 37,
  },
  DINERS: {
    name: "DINERS",
    cardNumbersFormat: [4, 6, 4],
    validLength: 14,
    identifier: 36,
  },
  UNION_PAY: {
    name: "UNION_PAY",
    cardNumbersFormat: [4, 4, 4, 4],
    validLength: 16,
    identifierRange: [
      [622126, 622925],
      [624, 626],
      [6282, 6288],
    ],
  },
  NONE: {
    name: "NONE",
    cardNumbersFormat: [4, 4, 4, 4],
    validLength: 16,
  },
};
