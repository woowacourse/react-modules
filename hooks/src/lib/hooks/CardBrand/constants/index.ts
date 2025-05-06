import type { CardBrand, CardBrandRule } from "../types";

export const CARD_BRAND_RULE: Record<CardBrand, CardBrandRule> = {
  AMEX: {
    ranges: [
      [34, 34],
      [37, 37],
    ],
    maxLength: 15,
    formatNumbers: [4, 6, 5],
  },
  Diners: {
    ranges: [[36, 36]],
    maxLength: 14,
    formatNumbers: [4, 6, 4],
  },
  Visa: {
    ranges: [[4, 4]],
    maxLength: 16,
    formatNumbers: [4, 4, 4, 4],
  },
  MasterCard: {
    ranges: [[51, 55]],
    maxLength: 16,
    formatNumbers: [4, 4, 4, 4],
  },
  UnionPay: {
    ranges: [
      [622126, 622925],
      [624, 626],
      [6282, 6288],
    ],
    maxLength: 16,
    formatNumbers: [4, 4, 4, 4],
  },
};
