import { CARD_NUMBER_FORMAT } from '../constants';
import { CardBrand } from '../types';

const formatCardNumber = ({ cardNumber, brand }: { cardNumber: string; brand: CardBrand | null }) => {
  if (!brand) return cardNumber;

  const digit = cardNumber.split('');

  return CARD_NUMBER_FORMAT[brand].pattern
    .split('')
    .reduce((result, char) => (char === '#' ? result + (digit.shift() || '') : result + ' '), '')
    .trim();
};

export default formatCardNumber;
