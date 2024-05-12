import { BrandInfo } from '../types/card';
import createNumbers from '../utils/numberArrayUtils';

export const MONTH = {
  startNumber: 1,
  endNumber: 12,
};
export const DATE_LENGTH = 2;

export const CENTURY_PREFIX = 2000;

export const MAX_CARD_YEARS_FROM_NOW = 5;

export const PASSWORD_LENGTH = 2;

export const CARD_BRANDS: BrandInfo[] = [
  { name: 'visa', numbers: [4], length: 16 },
  { name: 'master', numbers: createNumbers(51, 55), length: 16 },
  { name: 'diners', numbers: [36], length: 14 },
  { name: 'amex', numbers: [34, 35], length: 15 },
  {
    name: 'union',
    numbers: [createNumbers(622126, 622925), createNumbers(6282, 6288), createNumbers(624, 626)],
    length: 16,
  },
];

export const BRAND_LENGTH = CARD_BRANDS.reduce(
  (acc, brand) => {
    if (!brand.name) return acc;
    acc[brand.name] = brand.length;
    return acc;
  },
  {} as Record<string, number>,
);

export const MIN_CARD_NUMBERS_LENGTH = 14;
export const MAX_CARD_NUMBERS_LENGTH = 16;
