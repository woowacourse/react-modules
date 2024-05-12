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
    signature: 4,
  },
  master: {
    brand: 'MASTER',
    length: 16,
    format: [4, 4, 4, 4],
    signature: [51, 55],
  },
  diners: {
    brand: 'DINERS',
    length: 14,
    format: [4, 6, 4],
    signature: 36,
  },
  amex: {
    brand: 'AMEX',
    length: 15,
    format: [4, 6, 5],
    signature: [34, 37],
  },
  union: {
    brand: 'UNION',
    length: 16,
    format: [4, 4, 4, 4],
    signature: [
      [622126, 622925],
      [624, 626],
      [6282, 6288],
    ],
  },
  default: {
    brand: 'DEFAULT',
    length: 16,
    format: [4, 4, 4, 4],
    signature: null,
  },
} as const;
