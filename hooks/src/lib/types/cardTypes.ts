export type CardPeriodKey = 'month' | 'year';

export type CardNumber = string;
export type CardNumberError = string[];

export type CardExpiryDate = Record<CardPeriodKey, string>;
export type CardExpiryDateError = Record<CardPeriodKey, string>;
