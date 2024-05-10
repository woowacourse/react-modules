interface NumbersIdentifier {
  type: "value";
  values: number[];
}

interface RangeIdentifier {
  type: "range";
  values: [number, number][];
}

export type Identifier = NumbersIdentifier | RangeIdentifier | null;

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
  identifier: Identifier;
}

export const CardBrands: Record<CardBrandName, CardBrandInfo> = {
  VISA: {
    name: "VISA",
    cardNumbersFormat: [4, 4, 4, 4],
    validLength: 19,
    identifier: {
      type: "value",
      values: [4],
    },
  },
  MASTER_CARD: {
    name: "MASTER_CARD",
    cardNumbersFormat: [4, 4, 4, 4],
    validLength: 19,
    identifier: {
      type: "range",
      values: [[51, 55]],
    },
  },
  AMEX: {
    name: "AMEX",
    cardNumbersFormat: [4, 6, 5],
    validLength: 17,
    identifier: { type: "value", values: [34, 37] },
  },
  DINERS: {
    name: "DINERS",
    cardNumbersFormat: [4, 6, 4],
    validLength: 16,
    identifier: { type: "value", values: [36] },
  },
  UNION_PAY: {
    name: "UNION_PAY",
    cardNumbersFormat: [4, 4, 4, 4],
    validLength: 19,
    identifier: {
      type: "range",
      values: [
        [622126, 622925],
        [624, 626],
        [6282, 6288],
      ],
    },
  },
  NONE: {
    name: "NONE",
    cardNumbersFormat: [4, 4, 4, 4],
    validLength: 19,
    identifier: null,
  },
} as const;

export const CARD_BRANDS_NAMES = Object.keys(CardBrands) as CardBrandName[];
