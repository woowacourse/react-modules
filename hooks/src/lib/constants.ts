export const REGEX = {
  onlyUpperAlphabetAndOneBlank: /^[A-Z]+(\s[A-Z]+)?$/,
  onlyNumber: /^\d*/,
  visa: /^4\d*/,
  mastercard: /^5[1-5]\d*/,
  diners: /^36\d*/,
  amex: /^3[4|7]\d*/,
  unionpay: /^62(212[6-9]|21[3-9][0-9]|2[2-8][0-9][0-9]|29[0-1][1-9]|292[0-5]|[4-6]|8[2-8])\d*/,
};

export type CardBrand = 'Visa' | 'Mastercard' | 'Diners' | 'AMEX' | 'Unionpay' | 'None';

export const META_CARD: Record<CardBrand, { maxLength: number; format: number[] }> = {
  Visa: { maxLength: 16, format: [4, 4, 4, 4] },
  Mastercard: { maxLength: 16, format: [4, 4, 4, 4] },
  Diners: { maxLength: 14, format: [4, 6, 4] },
  AMEX: { maxLength: 15, format: [4, 6, 5] },
  Unionpay: { maxLength: 16, format: [4, 4, 4, 4] },
  None: { maxLength: 16, format: [4, 4, 4, 4] },
};

export const DATE = {
  maxMonth: 12,
  minMonth: 1,
};

export const MAX_LENGTH = {
  expiryMonth: 2,
  expiryYear: 2,
};
