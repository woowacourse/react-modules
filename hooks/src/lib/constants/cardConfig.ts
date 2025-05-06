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
