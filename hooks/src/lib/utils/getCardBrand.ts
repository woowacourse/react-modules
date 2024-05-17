export const CARD_BRAND = {
  VISA: "visa",
  MASTERCARD: "mastercard",
  DINERS: "diners",
  AMEX: "amex",
  UNIONPAY: "unionpay",
};

export type CardBrand = (typeof CARD_BRAND)[keyof typeof CARD_BRAND];

const VISA_START_NUMBER = 4;
const MASTERCARD_START_NUMBER = {
  min: 51,
  max: 55,
};
const DINERS_START_NUMBER = 36;
const AMEX_START_NUMBERS = [34, 37];
const UNIONPAY_START_RANGES = [
  { min: 622126, max: 622925 },
  { min: 624, max: 626 },
  { min: 6282, max: 6288 },
];

const getCardBrand = (cardNumbers: string) => {
  if (cardNumbers.startsWith(`${VISA_START_NUMBER}`)) {
    return "visa";
  }

  const firstTwoDigits = Number(cardNumbers.slice(0, 2));
  if (
    firstTwoDigits >= MASTERCARD_START_NUMBER.min &&
    firstTwoDigits <= MASTERCARD_START_NUMBER.max
  ) {
    return "mastercard";
  }

  if (cardNumbers.startsWith(`${DINERS_START_NUMBER}`)) {
    return "diners";
  }

  if (AMEX_START_NUMBERS.some((startNumber) => cardNumbers.startsWith(`${startNumber}`))) {
    return "amex";
  }

  if (
    UNIONPAY_START_RANGES.some((range) => {
      const number = Number(cardNumbers.slice(0, `${range.min}`.length));
      return number >= range.min && number <= range.max;
    })
  ) {
    return "unionpay";
  }

  return "";
};

export default getCardBrand;
