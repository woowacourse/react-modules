export type CardNumberKey = 'first' | 'second' | 'third' | 'fourth';

export type CardPeriodKey = 'month' | 'year';

export type CardNumber = Record<CardNumberKey, string>;
export type CardNumberError = Record<CardNumberKey, string>;

export type CardExpiryDate = Record<CardPeriodKey, string>;
export type CardExpiryDateError = Record<CardPeriodKey, string>;

export const CARD_BRAND_KEYS = ['visa', 'mastercard', 'amex', 'diners', 'unionpay'] as const;

export type CardBrand = typeof CARD_BRAND_KEYS[number];
