export const VALID_CARD_BRANDS = {
  Visa: 'Visa',
  MasterCard: 'MasterCard',
  Diners: 'Diners',
  AMEX: 'AMEX',
  UnionPay: 'UnionPay',
} as const;

export const CARD_BRANDS = {
  ...VALID_CARD_BRANDS,
  Unknown: 'Unknown',
} as const;

export type ValidCardBrand = keyof typeof VALID_CARD_BRANDS;
export type CardBrand = keyof typeof CARD_BRANDS;

export interface CardRule {
  type: CardBrand;
  match: (cardNumber: string) => boolean;
  numberLengths: number;
}
