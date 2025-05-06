export type CardNumberKey = 'first' | 'second' | 'third' | 'fourth';

export type CardPeriodKey = 'month' | 'year';

export type CardNumber = Record<CardNumberKey, string>;
export type CardNumberError = Record<CardNumberKey, string>;

export type CardExpiryDate = Record<CardPeriodKey, string>;
export type CardExpiryDateError = Record<CardPeriodKey, string>;
