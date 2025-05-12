export const CardBrandType = {
  UNKNOWN: 'UNKNOWN',
  VISA: 'VISA',
  MASTERCARD: 'MASTERCARD',
  AMEX: 'AMEX',
  DINERS: 'DINERS',
  UNIONPAY: 'UNIONPAY',
};

export const CARD_RULES = {
  [CardBrandType.VISA]: {
    lengths: [16],
    pattern: /^4/,
    formatPattern: /(\d{4})(\d{4})(\d{4})(\d{4})/,
    fields: 4,
    fieldLengths: [4, 4, 4, 4],
  },
  [CardBrandType.MASTERCARD]: {
    lengths: [16],
    pattern: /^(5[1-5]|2[2-7])/,
    formatPattern: /(\d{4})(\d{4})(\d{4})(\d{4})/,
    fields: 4,
    fieldLengths: [4, 4, 4, 4],
  },
  [CardBrandType.AMEX]: {
    lengths: [15],
    pattern: /^3[47]/,
    formatPattern: /(\d{4})(\d{6})(\d{5})/,
    fields: 3,
    fieldLengths: [4, 6, 5],
  },
  [CardBrandType.DINERS]: {
    lengths: [14],
    pattern: /^36/,
    formatPattern: /(\d{4})(\d{6})(\d{4})/,
    fields: 3,
    fieldLengths: [4, 6, 4],
  },
  [CardBrandType.UNIONPAY]: {
    lengths: [16],
    pattern: /^(62212[6-9]|6221[3-9]|622[2-8]|6229[0-1]|62292[0-5])/,
    formatPattern: /(\d{4})(\d{4})(\d{4})(\d{4})/,
    fields: 4,
    fieldLengths: [4, 4, 4, 4],
  },
  [CardBrandType.UNKNOWN]: {
    lengths: [16],
    pattern: /^\d+/,
    formatPattern: /(\d{4})(\d{4})(\d{4})(\d{4})/,
    fields: 4,
    fieldLengths: [4, 4, 4, 4],
  },
};
