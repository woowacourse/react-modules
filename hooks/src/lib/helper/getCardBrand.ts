import {isLengthBetween} from '../utils/validation';

export type CardBrand = 'Diners' | 'AMEX' | 'Visa' | 'MasterCard' | 'Union';

interface CardBrandRules {
  brand: CardBrand;
  validate: (value: string) => boolean;
}

const MIN_LENGTH = 14;
const MAX_LENGTH = 16;

const getPrefixCardNumber = (count: number, cardNumber: string) => {
  if (cardNumber.length <= count) return 0;

  return Number(cardNumber.slice(0, count));
};

const cardBrandRules: CardBrandRules[] = [
  {
    brand: 'Diners',
    validate: (cardNumber: string) =>
      cardNumber.length === 14 && cardNumber.startsWith('36'),
  },
  {
    brand: 'AMEX',
    validate: (cardNumber: string) =>
      cardNumber.length === 15 &&
      (cardNumber.startsWith('34') || cardNumber.startsWith('37')),
  },
  {
    brand: 'Visa',
    validate: (cardNumber: string) =>
      cardNumber.length === 16 && cardNumber.startsWith('4'),
  },
  {
    brand: 'MasterCard',
    validate: (cardNumber: string) => {
      const prefix = getPrefixCardNumber(2, cardNumber);
      return cardNumber.length === 16 && prefix >= 51 && prefix <= 55;
    },
  },
  {
    brand: 'Union',
    validate: (cardNumber: string) => {
      const prefix3 = getPrefixCardNumber(3, cardNumber);
      return cardNumber.length === 16 && prefix3 >= 624 && prefix3 <= 626;
    },
  },
  {
    brand: 'Union',
    validate: (cardNumber: string) => {
      const prefix4 = getPrefixCardNumber(4, cardNumber);
      return cardNumber.length === 16 && prefix4 >= 6282 && prefix4 <= 6288;
    },
  },
  {
    brand: 'Union',
    validate: (cardNumber: string) => {
      const prefix6 = getPrefixCardNumber(6, cardNumber);
      return cardNumber.length === 16 && prefix6 >= 622126 && prefix6 <= 622925;
    },
  },
];

export const getCardBrand = (cardNumber: string): CardBrand | undefined => {
  if (!isLengthBetween(cardNumber, MIN_LENGTH, MAX_LENGTH)) return undefined;

  return cardBrandRules.find((rule) => rule.validate(cardNumber))?.brand;
};
