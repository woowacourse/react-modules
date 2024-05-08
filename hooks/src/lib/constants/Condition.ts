export const CARD_TYPE = {
  VISA: {
    MIN_LENGTH: 1,
    VALID_LENGTH: 16,
  },
  MASTERCARD: {
    MIN_LENGTH: 2,
    VALID_LENGTH: 16,
  },
  DINERS: {
    MIN_LENGTH: 2,
    VALID_LENGTH: 14,
  },
  AMEX: {
    MIN_LENGTH: 2,
    VALID_LENGTH: 15,
  },
  UNIONPAY: {
    MIN_LENGTH: 6,
    VALID_LENGTH: 16,
  },
  DEFAULT: {
    MIN_LENGTH: 6,
    VALID_LENGTH: 16,
  },
};
