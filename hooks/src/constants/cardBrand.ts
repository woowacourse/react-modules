interface NumbersIdentifier {
  type: "value";
  values: number[];
}

interface RangeIdentifier {
  type: "range";
  values: [number, number][];
}

export type CardBrandName =
  | "VISA"
  | "MASTER_CARD"
  | "AMEX"
  | "DINERS"
  | "UNION_PAY";

export type CardBrandNameWithNone = CardBrandName | "NONE";

export type Identifier = NumbersIdentifier | RangeIdentifier;

export interface CardBrandInfo {
  name: CardBrandNameWithNone;
  cardNumbersFormat: number[];
  validLength: number;
  identifier: Identifier;
}

export interface CardBrandInfoWithNone {
  name: CardBrandNameWithNone;
  cardNumbersFormat: number[];
  validLength: number;
  identifier: Identifier | null;
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
} as const;

export const CardBrandsWithNone: Record<
  CardBrandNameWithNone,
  CardBrandInfoWithNone
> = {
  ...CardBrands,
  NONE: {
    name: "NONE",
    cardNumbersFormat: [4, 4, 4, 4],
    validLength: 19,
    identifier: null,
  },
};

export const CARD_BRANDS_NAMES = Object.keys(CardBrands) as CardBrandName[];
