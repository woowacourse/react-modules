export const CARD_NUMBER_ERROR_TYPE = {
  nonNumeric: 'NON_NUMERIC',
  notFulledCardNumber: 'NOT_FULLED_CARD_NUMBER',
  notFulledCardNumbers: 'NOT_FULLED_CARD_NUMBERS',
  notError: 'NOT_ERROR',
} as const;

export const CARD_BRAND = {
  visa: {
    name: 'visa',
    length: 16,
    format: [4, 4, 4, 4],
  },
  master: {
    name: 'master',
    length: 16,
    format: [4, 4, 4, 4],
  },
  diners: {
    name: 'diners',
    length: 14,
    format: [4, 6, 4],
  },
  amex: {
    name: 'amex',
    length: 15,
    format: [4, 6, 5],
  },
  union: {
    name: 'union',
    length: 16,
    format: [4, 4, 4, 4],
  },
  default: {
    name: 'default',
    length: 16,
    format: [4, 4, 4, 4],
  },
} as const;
