export type CardBrandType = keyof typeof CARD_BRAND;

export const CARD_BRAND = {
  VISA: {
    name: 'Visa',
    formattingRules: [4, 4, 4, 4],
    requiredLength: 16,
    condition: /^4\d*$/,
  },
  MASTERCARD: {
    name: 'Mastercard',
    formattingRules: [4, 4, 4, 4],
    requiredLength: 16,
    condition: /^(5[1-5])\d*$/,
  },
  AMEX: {
    name: 'AMEX',
    formattingRules: [4, 6, 5],
    requiredLength: 15,
    condition: /^(34|37)\d*$/,
  },
  DINERS: {
    name: 'Diners',
    formattingRules: [4, 6, 4],
    requiredLength: 14,
    condition: /^36\d*$/,
  },
  UNIONPAY: {
    name: 'UnionPay',
    formattingRules: [4, 4, 4, 4],
    requiredLength: 16,
    condition:
      /^(622(1[2-9][6-9]|[2-8]\d\d|9[01]\d|925\d|927[0-8]\d)|628[2-8]|624|625|626)\d*$/,
  },
  NONE: {
    name: 'none',
    formattingRules: [4, 4, 4, 4],
    requiredLength: 16,
    condition: /^[0-9]+$/,
  },
} as const;
