import { CardBrandInfoType, CardBrandType } from '../types/cardTypes';

export const CARD_BRAND_INFO: Record<CardBrandType, CardBrandInfoType> = {
  Visa: { pattern: /^4\d*/, length: 16, format: [4, 4, 4, 4] },
  Master: { pattern: /^5[1-5]/, length: 16, format: [4, 4, 4, 4] },
  UnionPay: {
    pattern:
      /^62212[6-9]|6221[3-9]\d|622[2-8]\d{2}|6229[01]\d|62292[0-5]|62[4-6]|628[2-8]/,
    length: 16,
    format: [4, 4, 4, 4],
  },
  Diners: { pattern: /^36/, length: 14, format: [4, 6, 4] },
  AMEX: { pattern: /^3[47]/, length: 15, format: [4, 6, 5] },
};

export const FALLBACK_CARD_INFO: CardBrandInfoType = {
  pattern: /^4\d*/,
  length: 16,
  format: [4, 4, 4, 4],
};
