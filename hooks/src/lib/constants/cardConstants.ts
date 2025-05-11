export const CARD_NUMBER = {
  VISA_START: '4',
  MASTERCARD_START: ['51', '52', '53', '54', '55'],
  AMEX_START: ['34', '37'],
  DINERS_START: '36',
  UNIONPAY_START: {
    RANGE_1: {
      START: '622126',
      END: '622925',
    },
    RANGE_2: {
      START: '624',
      END: '626',
    },
    RANGE_3: {
      START: '6282',
      END: '6288',
    },
  },
} as const;

export const CARD_LENGTH = {
  VISA: 16,
  MASTERCARD: 16,
  AMEX: 15,
  DINERS: 14,
  UNIONPAY: 16,
} as const;

export const CARD_FORMAT = {
  VISA: {
    GROUPS: [4, 4, 4, 4],
    SEPARATOR: ' ',
  },
  MASTERCARD: {
    GROUPS: [4, 4, 4, 4],
    SEPARATOR: ' ',
  },
  AMEX: {
    GROUPS: [4, 6, 5],
    SEPARATOR: ' ',
  },
  DINERS: {
    GROUPS: [4, 6, 4],
    SEPARATOR: ' ',
  },
  UNIONPAY: {
    GROUPS: [4, 4, 4, 4],
    SEPARATOR: ' ',
  },
} as const;

export const CVC = {
  AMEX: 4,
  DEFAULT: 3,
} as const;

export const EXPIRY = {
  MONTH: {
    MIN: 1,
    MAX: 12,
    LENGTH: 2,
  },
  YEAR: {
    LENGTH: 2,
  },
} as const;
