import CARD_BRAND_RULES, { CARD_BRAND_NAME } from '../constants/cardBrandRule';

import { CardBrandRule } from '../type';

const isValidCardBrand = (cardNumber: string, rule: CardBrandRule) => {
  return rule.startWiths.some(startWith => {
    if (typeof startWith === 'string') {
      return cardNumber.startsWith(startWith);
    }
    const sliceNumber = Math.max(startWith.from.length, startWith.to.length);
    const slicedCardNumber = cardNumber.slice(0, sliceNumber);

    return (
      startWith.from <= slicedCardNumber && slicedCardNumber <= startWith.to
    );
  });
};

const getCheckCardBrand = (
  cardBrandNames: (typeof CARD_BRAND_NAME)[number][]
) => {
  const targetNameSet = new Set(cardBrandNames);

  return (cardNumber: string) => {
    const targetRules: CardBrandRule<(typeof cardBrandNames)[number]>[] =
      CARD_BRAND_RULES.filter(rule => targetNameSet.has(rule.name));
    return targetRules.find(rule => isValidCardBrand(cardNumber, rule));
  };
};

export default getCheckCardBrand;
