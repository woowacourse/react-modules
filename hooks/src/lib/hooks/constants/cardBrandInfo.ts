const CARD_BRAND_FORMAT: Record<string, number[]> = {
  VISA: [4, 4, 4, 4],
  MASTERCARD: [4, 4, 4, 4],
  AMEX: [4, 6, 5],
  DINERS: [4, 6, 4],
  UNIONPAY: [4, 4, 4, 4],
  DEFAULT: [4, 4, 4, 4],
};

export default CARD_BRAND_FORMAT;
