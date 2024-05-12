const REGEX = {
  onlyUpperAlphabetAndOneBlank: /^[A-Z]+(\s[A-Z]+)?$/,
  onlyNumber: /^(\d*)$/,

  isVisa: /^4/,
  isMastercard: /^5[1-5]/,
  isDiners: /^36/,
  isAmex: /^(34|37)/,
  isUnionpay: /^(62[4-6]|628[2-8]|622(12[6-9]|[2-8]|9[0|1]|92[0-5]))/,
};

const CARD_FORMAT: {
  [key: string]: {
    numberFormat: number[];
    maxNumberLength: number;
  };
} = {
  visa: {
    numberFormat: [4, 4, 4, 4],
    maxNumberLength: 16,
  },
  mastercard: {
    numberFormat: [4, 4, 4, 4],
    maxNumberLength: 16,
  },
  diners: {
    numberFormat: [4, 6, 4],
    maxNumberLength: 14,
  },
  amex: {
    numberFormat: [4, 6, 5],
    maxNumberLength: 15,
  },
  unionpay: {
    numberFormat: [4, 4, 4, 4],
    maxNumberLength: 16,
  },
  etc: {
    numberFormat: [4, 4, 4, 4],
    maxNumberLength: 16,
  },
};

const MAX_DATE_LENGTH = {
  expiryMonth: 2,
  expiryYear: 2,
};

const DATE = {
  maxMonth: 12,
  minMonth: 1,
};

export { REGEX, MAX_DATE_LENGTH, DATE, CARD_FORMAT };
