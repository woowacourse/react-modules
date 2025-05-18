import { CARD_BRANDS_RULE } from '../rule';
import { CARD_BRANDS, VALID_CARD_BRANDS } from '../constant';
import type { CardRule } from '../types';
import type { ValidCardBrand } from '../types';

const isValidCardBrand = (cardType: string): cardType is ValidCardBrand => {
  return cardType in VALID_CARD_BRANDS;
};

const checkCardBrandRange = ({ value, type }: { value: string; type: ValidCardBrand }) => {
  const cardBrand = CARD_BRANDS_RULE[type];

  return cardBrand.ranges.some(({ start, end }) => {
    const rangeLength = start.toString().length;
    const cardPrefix = Number.parseInt(value.slice(0, rangeLength), 10);
    return cardPrefix >= start && cardPrefix <= end;
  });
};

const validCardRules = Object.entries(CARD_BRANDS_RULE)
  .filter(([type]) => type !== CARD_BRANDS.Unknown)
  .map(([type, rule]) => {
    if (!isValidCardBrand(type)) {
      return null;
    }

    return {
      type,
      match: (cardNumber: string) => checkCardBrandRange({ value: cardNumber, type }),
      numberLengths: rule.length,
    };
  })
  .filter((val) => val !== null);

export const getCardBrand = ({
  cardNumber,
  cardRules = [],
}: {
  cardNumber: string;
  cardRules?: CardRule[];
}): Omit<CardRule, 'match'> => {
  const addedCardRules = [...validCardRules, ...cardRules];

  for (const cardRule of addedCardRules) {
    const { type, match, numberLengths } = cardRule;
    if (match(cardNumber) && isValidCardBrand(type)) {
      return {
        type,
        numberLengths,
      };
    }
  }

  return {
    type: CARD_BRANDS.Unknown,
    numberLengths: CARD_BRANDS_RULE[CARD_BRANDS.Unknown].length,
  };
};
