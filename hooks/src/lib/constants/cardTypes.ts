export const CARD_TYPES = {
  VISA: 'VISA',
  MASTERCARD: 'MASTERCARD',
  AMEX: 'AMEX',
  DINERS: 'DINERS',
  UNIONPAY: 'UNIONPAY',
} as const;

export type CardType = (typeof CARD_TYPES)[keyof typeof CARD_TYPES];
