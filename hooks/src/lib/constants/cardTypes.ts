export const CARD_TYPES = {
  VISA: 'VISA',
  MASTERCARD: 'MASTERCARD',
  AMEX: 'AMEX',
  DINERS: 'DINERS',
  UNIONPAY: 'UNIONPAY',
} as const;

export type CardType = (typeof CARD_TYPES)[keyof typeof CARD_TYPES];

export const CARD_PATTERNS = {
  [CARD_TYPES.VISA]: /^4/,
  [CARD_TYPES.MASTERCARD]: /^5[1-5]/,
  [CARD_TYPES.AMEX]: /^3[47]/,
  [CARD_TYPES.DINERS]: /^36/,
  [CARD_TYPES.UNIONPAY]: /^(622[1-9]|62[4-6]|628[2-8])/,
} as const;

export const CARD_LENGTHS = {
  [CARD_TYPES.VISA]: 16,
  [CARD_TYPES.MASTERCARD]: 16,
  [CARD_TYPES.AMEX]: 15,
  [CARD_TYPES.DINERS]: 14,
  [CARD_TYPES.UNIONPAY]: 16,
} as const;
