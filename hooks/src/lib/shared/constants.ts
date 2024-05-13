export const VALID_INPUT_LENGTH = {
  cardNumber: 16,
  cardIssuer: 1,
  cvcNumber: 3,
  expiryDate: {
    month: 1,
    year: 2,
  },
  ownerName: 1,
  passwordPrefix: 2,
};

export const CARD_BRAND = {
  visa: 'visa',
  masterCard: 'masterCard',
  amex: 'amex',
  diners: 'diners',
  unionPay: 'unionPay',
} as const;

export const CARD_NUMBER_FORMAT: Record<keyof typeof CARD_BRAND, { maxLength: number; pattern: string }> = {
  [CARD_BRAND.visa]: {
    maxLength: 16,
    pattern: '#### #### #### ####',
  },
  [CARD_BRAND.masterCard]: {
    maxLength: 16,
    pattern: '#### #### #### ####',
  },
  [CARD_BRAND.amex]: {
    maxLength: 15,
    pattern: '#### ###### #####',
  },
  [CARD_BRAND.diners]: {
    maxLength: 14,
    pattern: '#### ###### ####',
  },
  [CARD_BRAND.unionPay]: {
    maxLength: 16,
    pattern: '#### #### #### ####',
  },
};
