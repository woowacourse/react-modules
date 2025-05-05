export const VALIDATION_RULE = {
  CARD_NUMBERS: {
    MAX_LENGTH: 4,
  },
  EXPIRY_DATE: {
    MAX_LENGTH: 2,
    MONTH_MIN: 1,
    MONTH_MAX: 12,
    YEAR_MIN: 25,
  },
  CVC: {
    MAX_LENGTH: 3,
  },
  PASSWORD: {
    MAX_LENGTH: 2,
  },
} as const;
