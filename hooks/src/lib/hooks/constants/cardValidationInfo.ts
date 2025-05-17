export const CARD_INPUT = {
  NUMBER_INPUTS: 4,
  EXPIRY_DATE_INPUTS: 2,
  MAX_LENGTH: {
    CARD: 4,
    EXPIRE_DATE: 2,
    CVC: 3,
    PASSWORD: 2,
  },
} as const;

export const EXPIRATION = {
  MONTH: {
    MIN: 1,
    MAX: 12,
  },
  YEAR: {
    CURRENT: new Date().getFullYear() % 100,
  },
} as const;

export const CARD_BRAND_REGEX = [
  { brand: "VISA", pattern: /^4/ },
  { brand: "MASTERCARD", pattern: /^5[1-5]/ },
  { brand: "AMEX", pattern: /^3[47]/ },
  { brand: "DINERS", pattern: /^36/ },
  { brand: "UNIONPAY", pattern: /^62[4-6]/ },
  { brand: "UNIONPAY", pattern: /^628[2-8]/ },
  {
    brand: "UNIONPAY",
    pattern: /^622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5])/,
  },
];
