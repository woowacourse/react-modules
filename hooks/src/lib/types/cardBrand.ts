export type CardBrand = 'VISA' | 'MASTER' | 'DINERS' | 'AMEX' | 'UNIONPAY' | 'UNKNOWN';

export const CARD_FORMAT_PATTERNS = {
  VISA: [4, 4, 4, 4],
  MASTER: [4, 4, 4, 4],
  DINERS: [4, 6, 4],
  AMEX: [4, 6, 5],
  UNIONPAY: [4, 4, 4, 4],
  UNKNOWN: [4, 4, 4, 4],
};
