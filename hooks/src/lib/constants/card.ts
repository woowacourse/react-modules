import { Brand, BrandInfo } from '../types/card';
import createNumbers from '../utils/numberArrayUtils';

export const CARD_NUMBERS_PART_LENGTH = 4;

export const CARD_NUMBERS_GROUP_LENGTH = 4;

export const MONTH = {
  startNumber: 1,
  endNumber: 12,
};
export const DATE_LENGTH = 2;

export const CENTURY_PREFIX = 2000;

export const MAX_CARD_YEARS_FROM_NOW = 5;

export const PASSWORD_LENGTH = 2;

export const VISA: BrandInfo<number[]> = {
  name: 'visa',
  numbers: [4],
  length: 16,
};
export const MASTER_NUMBERS = {
  start: 51,
  end: 55,
};
export const MASTER: BrandInfo<number[]> = {
  name: 'master',
  numbers: createNumbers(MASTER_NUMBERS.start, MASTER_NUMBERS.end),
  length: 16,
};

export const DINERS: BrandInfo<number[]> = {
  name: 'diners',
  numbers: [36],
  length: 14,
};

export const AMEX: BrandInfo<number[]> = {
  name: 'amex',
  numbers: [34, 35],
  length: 15,
};
export const UNION_NUMBERS = {
  sixNumbers: {
    start: 622126,
    end: 622925,
  },
  fourNumbers: {
    start: 6282,
    end: 6288,
  },
  threeNumbers: {
    start: 624,
    end: 626,
  },
};

export const MIN_CARD_NUMBERS_LENGTH = 14;

export const UNION: BrandInfo<{ sixNumbers: number[]; fourNumbers: number[]; threeNumbers: number[] }> = {
  name: 'union',
  numbers: {
    sixNumbers: createNumbers(UNION_NUMBERS.sixNumbers.start, UNION_NUMBERS.sixNumbers.end),
    fourNumbers: createNumbers(UNION_NUMBERS.fourNumbers.start, UNION_NUMBERS.fourNumbers.end),
    threeNumbers: createNumbers(UNION_NUMBERS.threeNumbers.start, UNION_NUMBERS.threeNumbers.end),
  },
  length: 16,
};

export const BRAND_LENGTH: { [key in Exclude<Brand, null>]: number } = {
  visa: VISA.length,
  master: MASTER.length,
  diners: DINERS.length,
  amex: AMEX.length,
  union: UNION.length,
};
