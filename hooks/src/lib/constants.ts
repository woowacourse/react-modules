const REGEX = {
  onlyUpperAlphabetAndOneBlank: /^[A-Z]+(\s[A-Z]+)?$/,
  onlyNumber: /^(\d*)$/,
};

const MAX_LENGTH = {
  cardNumber: 4,
  expiryMonth: 2,
  expiryYear: 2,
};

const DATE = {
  maxMonth: 12,
  minMonth: 1,
};

const CARD_TYPE = {
  visaNumber: '4',
  minMastercardNumber: 51,
  maxMastercardNumber: 55,
};

export { REGEX, MAX_LENGTH, DATE, CARD_TYPE };
