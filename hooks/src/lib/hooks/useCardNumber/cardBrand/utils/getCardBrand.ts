import { CARD_BRANDS } from '../constant';
import type { CardBrand, CardRule, ValidCardBrand } from '../constant';

const CARD_BRAND_RANGE_RULES = {
  Visa: [{ start: 4, end: 4 }],
  MasterCard: [{ start: 51, end: 55 }],
  Diners: [{ start: 36, end: 36 }],
  AMEX: [
    { start: 34, end: 34 },
    { start: 37, end: 37 },
  ],
  UnionPay: [
    { start: 622126, end: 622925 },
    { start: 624, end: 626 },
    { start: 6282, end: 6288 },
  ],
} as const;

const checkCardBrandRange = ({ value, type }: { value: string; type: ValidCardBrand }) => {
  for (const { start, end } of CARD_BRAND_RANGE_RULES[type]) {
    const needToCheckLength = start.toString().length;
    const convertedValue = Number.parseInt(value.slice(0, needToCheckLength), 10);

    if (convertedValue >= start && convertedValue <= end) {
      return true;
    }
  }

  return false;
};

const CARD_RULES: CardRule[] = [
  {
    type: CARD_BRANDS.Visa,
    match: (cardNumber: string) =>
      checkCardBrandRange({ value: cardNumber, type: CARD_BRANDS.Visa }),
    numberLengths: 16,
  },
  {
    type: CARD_BRANDS.MasterCard,
    match: (cardNumber: string) =>
      checkCardBrandRange({ value: cardNumber, type: CARD_BRANDS.MasterCard }),
    numberLengths: 16,
  },
  {
    type: CARD_BRANDS.Diners,
    match: (cardNumber: string) =>
      checkCardBrandRange({ value: cardNumber, type: CARD_BRANDS.Diners }),
    numberLengths: 14,
  },
  {
    type: CARD_BRANDS.AMEX,
    match: (cardNumber: string) =>
      checkCardBrandRange({ value: cardNumber, type: CARD_BRANDS.AMEX }),
    numberLengths: 15,
  },
  {
    type: CARD_BRANDS.UnionPay,
    match: (cardNumber: string) =>
      checkCardBrandRange({ value: cardNumber, type: CARD_BRANDS.UnionPay }),
    numberLengths: 16,
  },
] as const;

const isCardBrand = (cardType: string): cardType is CardBrand => {
  return cardType in CARD_BRANDS;
};

export const getCardBrand = ({
  cardNumber,
  cardRules = [],
}: {
  cardNumber: string;
  cardRules?: CardRule[];
}): Omit<CardRule, 'match'> => {
  const addedCardRules = [...CARD_RULES, ...cardRules];

  for (const cardRule of addedCardRules) {
    const { type, match, numberLengths } = cardRule;
    if (match(cardNumber) && isCardBrand(type)) {
      return {
        type,
        numberLengths,
      };
    }
  }

  return {
    type: CARD_BRANDS.Unknown,
    numberLengths: 16,
  };
};
