import { CardBrand, CardExpiration } from './card.type';

const INITIAL_CARD_EXPIRATION: CardExpiration = {
  month: '',
  year: '',
};

const BRAND_LENGTHS: Record<CardBrand, number> = {
  Visa: 16,
  Mastercard: 16,
  AMEX: 15,
  Diners: 14,
  UnionPay: 16,
  Unknown: 0,
};

const CARD_EXPIRATION_KEYS = Object.keys(INITIAL_CARD_EXPIRATION) as Array<keyof CardExpiration>;

const CARD_PATTERNS = {
  VISA: /^4/,
  MASTERCARD: /^(5[1-5])/,
  AMEX: /^(34|37)/,
  DINERS: /^36/,
} as const;

const UNIONPAY_RANGES = {
  PREFIX_6: { min: 622126, max: 622925 },
  PREFIX_3: { min: 624, max: 626 },
  PREFIX_4: { min: 6282, max: 6288 },
} as const;

const CARD_GROUPS: Record<CardBrand, readonly number[]> = {
  AMEX: [4, 6, 5],
  Diners: [4, 6, 4],
  Visa: [4, 4, 4, 4],
  Mastercard: [4, 4, 4, 4],
  UnionPay: [4, 4, 4, 4],
  Unknown: [4, 4, 4, 4],
} as const;

export { INITIAL_CARD_EXPIRATION, CARD_EXPIRATION_KEYS, BRAND_LENGTHS, CARD_PATTERNS, UNIONPAY_RANGES, CARD_GROUPS };
