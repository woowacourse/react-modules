import CARD_BRAND from '../constants/cardBrand';
import { CardBrand } from '../type';
import checkIsInRangeString from '../utils/checkIsInRangeString';

const isItCardBrand = (cardNumber: string, cardBrand: CardBrand) => {
  return cardBrand.startWiths.some(head => {
    if (typeof head === 'string') {
      return cardNumber.startsWith(head);
    }
    const sliceNumber = Math.max(head.from.length, head.to.length);
    return checkIsInRangeString(
      cardNumber.slice(0, sliceNumber),
      head.from,
      head.to
    );
  });
};

const getCardBrand = (cardNumber: string) => {
  return CARD_BRAND.find(cardBrand => isItCardBrand(cardNumber, cardBrand));
};

export default getCardBrand;
