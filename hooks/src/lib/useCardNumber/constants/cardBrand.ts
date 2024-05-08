export type ValidCardBrand = (typeof VALID_CARD_BRAND)[keyof typeof VALID_CARD_BRAND];
export type CardBrand = (typeof CARD_BRAND)[keyof typeof CARD_BRAND];

export const VALID_CARD_BRAND = {
  Diners: "Diners",
  AMEX: "AMEX",
  UnionPay: "UnionPay",
  MasterCard: "MasterCard",
  Visa: "Visa",
} as const;

export const CARD_BRAND = {
  ...VALID_CARD_BRAND,
  unknown: "unknown",
} as const;

export const CARD_BRAND_REGEX = {
  // Diners
  startWith36: /^36/,
  // AMEX
  startWith34or37: /^3[47]/,
  // UnionPay
  startWith624to626: /^62[4-6]/,
  startWith6282to6288: /^628[2-8]/,
  // MasterCard
  startWith51to55: /^5[1-5]/,
  // Visa
  startWith4: /^4/,
} as const;

export const CARD_NUMBER_LENGTH = {
  [CARD_BRAND.Diners]: 14,
  [CARD_BRAND.AMEX]: 15,
  [CARD_BRAND.UnionPay]: 16,
  [CARD_BRAND.MasterCard]: 16,
  [CARD_BRAND.Visa]: 16,
  [CARD_BRAND.unknown]: 16,
} as const;
