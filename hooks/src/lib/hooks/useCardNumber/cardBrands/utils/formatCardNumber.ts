import { CARD_BRANDS_RULE } from '../rule';
import { type CardBrand } from '../types';

export const formatCardNumber = ({ type, cardNumber }: { type: CardBrand; cardNumber: string }) => {
  const formattedCardNumber = CARD_BRANDS_RULE[type].format
    .map((length) => {
      const chunk = cardNumber.slice(0, length);
      cardNumber = cardNumber.slice(length);
      return chunk;
    })
    .filter(Boolean);

  return formattedCardNumber.join(' ');
};
