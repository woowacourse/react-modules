export type CARD_BRAND =
  | 'VISA'
  | 'MASTER'
  | 'AMEX'
  | 'DINERS'
  | 'UNIONPAY'
  | 'UNKNOWN';

export const CARD_CONFIG = {
  VISA: 4,
  MASTER: {
    START: 51,
    END: 55,
  },
  AMEX: {
    FIRST: 34,
    SECOND: 37,
  },
  DINERS: 36,
  UNIONPAY: {
    FIRST_TWO_DIGIT: 62,
    SECOND_FOUR_DIGIT: [
      { START: 2126, END: 2925 },
      { START: 4000, END: 6999 },
      { START: 8200, END: 8899 },
    ],
  },
};

export const CARD_BRAND_CONFIG = {
  VISA: {
    name: 'VISA',
    length: 16,
    format: [4, 4, 4, 4],
  },
  MASTER: {
    name: 'MASTER',
    length: 16,
    format: [4, 4, 4, 4],
  },
  AMEX: {
    name: 'AMEX',
    length: 15,
    format: [4, 6, 5],
  },
  DINERS: {
    name: 'DINERS',
    length: 14,
    format: [4, 6, 4],
  },
  UNIONPAY: {
    name: 'UNIONPAY',
    length: 16,
    format: [4, 4, 4, 4],
  },
  UNKNOWN: {
    name: 'UNKNOWN',
    length: 16,
    format: [4, 4, 4, 4],
  },
};
