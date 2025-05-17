import { CARD_BRANDS } from './constant';
import { CardBrand, CardBrandRules } from './types';

export const CARD_BRANDS_RULE: Readonly<Record<CardBrand, Readonly<CardBrandRules>>> = {
  [CARD_BRANDS.Visa]: {
    ranges: [{ start: 4, end: 4 }],
    format: [4, 4, 4, 4],
    length: 16,
  },
  [CARD_BRANDS.MasterCard]: {
    ranges: [{ start: 51, end: 55 }],
    format: [4, 4, 4, 4],
    length: 16,
  },
  [CARD_BRANDS.Diners]: {
    ranges: [{ start: 36, end: 36 }],
    format: [4, 6, 4],
    length: 14,
  },
  [CARD_BRANDS.AMEX]: {
    ranges: [
      { start: 34, end: 34 },
      { start: 37, end: 37 },
    ],
    format: [4, 6, 5],
    length: 15,
  },
  [CARD_BRANDS.UnionPay]: {
    ranges: [
      { start: 622126, end: 622925 },
      { start: 624, end: 626 },
      { start: 6282, end: 6288 },
    ],
    format: [4, 4, 4, 4],
    length: 16,
  },
  [CARD_BRANDS.Unknown]: {
    ranges: [],
    format: [4, 4, 4, 4],
    length: 16,
  },
} as const;
