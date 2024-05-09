interface NumbersIdentifier {
  type: "value";
  values: number[];
  step: number;
}

interface RangeIdentifier {
  type: "range";
  values: [number, number][];
  step: number;
}

export type Identifier = NumbersIdentifier | RangeIdentifier;

export type CardBrandName =
  | "VISA"
  | "MASTER_CARD"
  | "AMEX"
  | "DINERS"
  | "UNION_PAY"
  | "NONE";

export type CardBrandNameExcludedNone = Exclude<CardBrandName, "NONE">;

export interface CardBrandInfo {
  name: CardBrandName;
  cardNumbersFormat: number[];
  validLength: number;
}

export const CardBrandIdentifiers: Record<
  CardBrandNameExcludedNone,
  Identifier
> = {
  VISA: {
    type: "value",
    values: [4],
    step: 1,
  },
  MASTER_CARD: {
    type: "range",
    values: [[51, 55]],
    step: 2,
  },
  AMEX: {
    type: "value",
    values: [34, 37],
    step: 2,
  },
  DINERS: {
    type: "value",
    values: [36],
    step: 2,
  },
  UNION_PAY: {
    type: "range",
    values: [
      [622126, 622925],
      [624, 626],
      [6282, 6288],
    ],
    step: 3,
  },
};
export const CardBrands: Record<CardBrandName, CardBrandInfo> = {
  VISA: {
    name: "VISA",
    cardNumbersFormat: [4, 4, 4, 4],
    validLength: 19,
  },
  MASTER_CARD: {
    name: "MASTER_CARD",
    cardNumbersFormat: [4, 4, 4, 4],
    validLength: 19,
  },
  AMEX: {
    name: "AMEX",
    cardNumbersFormat: [4, 6, 5],
    validLength: 17, //15
  },
  DINERS: {
    name: "DINERS",
    cardNumbersFormat: [4, 6, 4],
    validLength: 16,
  },
  UNION_PAY: {
    name: "UNION_PAY",
    cardNumbersFormat: [4, 4, 4, 4],
    validLength: 19,
  },
  NONE: {
    name: "NONE",
    cardNumbersFormat: [4, 4, 4, 4],
    validLength: 19,
  },
} as const;

export const CARD_BRANDS_NAMES = Object.keys(CardBrands);
