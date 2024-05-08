export type CardBrandName =
  | "VISA"
  | "MASTER_CARD"
  | "AMEX"
  | "UNION_PAY"
  | "DINERS"
  | "NONE";

export interface CardBrandInfo {
  name: CardBrandName;
  cardNumbersFormat: number[];
  validLength: number;
}

export const cardBrandsInfo: Record<CardBrandName, CardBrandInfo> = {
  VISA: {
    name: "VISA",
    cardNumbersFormat: [4, 4, 4, 4],
    validLength: 16,
  },
  MASTER_CARD: {
    name: "MASTER_CARD",
    cardNumbersFormat: [4, 4, 4, 4],
    validLength: 16,
  },
  AMEX: { name: "AMEX", cardNumbersFormat: [4, 6, 5], validLength: 15 },
  DINERS: { name: "DINERS", cardNumbersFormat: [4, 6, 4], validLength: 14 },
  UNION_PAY: {
    name: "UNION_PAY",
    cardNumbersFormat: [4, 4, 4, 4],
    validLength: 16,
  },
  NONE: { name: "NONE", cardNumbersFormat: [4, 4, 4, 4], validLength: 16 },
};
