export const CARD_NUMBER = {
  maxLength: 4,
  fieldCount: 4,
};

export const CARD_EXPIRATION = {
  minMonth: 1,
  maxMonth: 12,
  minYear: new Date().getFullYear() % 100,
  maxYear: new Date().getFullYear() % 100 + 10,
  monthLength: 2,
  yearLength: 2,
};

export const CARD_CVC = {
  maxLength: 3,
};

export const CARD_PASSWORD = {
  maxLength: 2,
};

export const CARD_BRAND_CONFIG: Record<string, { length: number }> = {
  diners: { length: 14 },
  amex: { length: 15 },
  unionpay: { length: 16 },
  visa: { length: 16 },
  mastercard: { length: 16 },
  unknown: { length: 16 },
};

export const CARD_BRAND_SEGMENT: Record<string, number[]> = {
  amex:   [4, 6, 5],
  diners: [2, 6, 6],
  visa:   [4, 4, 4, 4],
  mastercard: [4, 4, 4, 4],
  unionpay:   [4, 4, 4, 4],
  unknown:    [4, 4, 4, 4],
};
