export type CardNumberKey = 'first' | 'second' | 'third' | 'forth';

export type CardPeriodKey = 'month' | 'year';

export type CardNumber = Record<CardNumberKey, string>;
export type CardNumberError = Record<CardNumberKey, string>;

export type CardExpiryDate = Record<CardPeriodKey, string>;
export type CardExpiryDateError = Record<CardPeriodKey, string>;
