import CARD_BRAND from '../constants/cardBrand';
import { CardBrand } from '../type';
import checkIsInRangeString from '../utils/checkIsInRangeString';

const isItCardBrand = (cardNumber: string, cardBrand: CardBrand) => {
  return cardBrand.startWiths.some(startWith => {
    if (typeof startWith === 'string') {
      return cardNumber.startsWith(startWith);
    }
    const sliceNumber = Math.max(startWith.from.length, startWith.to.length);
    return checkIsInRangeString(
      cardNumber.slice(0, sliceNumber),
      startWith.from,
      startWith.to
    );
  });
};

const getCardBrand = (cardNumber: string) => {
  return CARD_BRAND.find(cardBrand => isItCardBrand(cardNumber, cardBrand));
};

export default getCardBrand;
