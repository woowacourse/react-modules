export const CARD_NUMBER_ERROR_TYPE = {
  nonNumeric: 'NON_NUMERIC',
  notFulledCardNumber: 'NOT_FULLED_CARD_NUMBER',
  notFulledCardNumbers: 'NOT_FULLED_CARD_NUMBERS',
  notError: 'NOT_ERROR',
} as const;

export const CARD_BRAND = {
  visa: {
    brand: 'VISA',
    length: 16,
    format: [4, 4, 4, 4],
  },
  master: {
    brand: 'MASTER',
    length: 16,
    format: [4, 4, 4, 4],
  },
  diners: {
    brand: 'DINERS',
    length: 14,
    format: [4, 6, 4],
  },
  amex: {
    brand: 'AMEX',
    length: 15,
    format: [4, 6, 5],
  },
  union: {
    brand: 'UNION',
    length: 16,
    format: [4, 4, 4, 4],
  },
  default: {
    brand: 'DEFAULT',
    length: 16,
    format: [4, 4, 4, 4],
  },
} as const;
