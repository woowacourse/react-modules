import { CARD_RULES, CardBrandType } from './cardRules';

const identifyCardBrand = (cardNumber: string) => {
  if (CARD_RULES[CardBrandType.VISA].pattern.test(cardNumber)) {
    return CardBrandType.VISA;
  } else if (CARD_RULES[CardBrandType.MASTERCARD].pattern.test(cardNumber)) {
    return CardBrandType.MASTERCARD;
  } else if (CARD_RULES[CardBrandType.AMEX].pattern.test(cardNumber)) {
    return CardBrandType.AMEX;
  } else if (CARD_RULES[CardBrandType.DINERS].pattern.test(cardNumber)) {
    return CardBrandType.DINERS;
  } else if (CARD_RULES[CardBrandType.UNIONPAY].pattern.test(cardNumber)) {
    return CardBrandType.UNIONPAY;
  }
  return CardBrandType.UNKNOWN;
};

export default identifyCardBrand;
