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

export { INITIAL_CARD_EXPIRATION, CARD_EXPIRATION_KEYS, BRAND_LENGTHS };
