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
