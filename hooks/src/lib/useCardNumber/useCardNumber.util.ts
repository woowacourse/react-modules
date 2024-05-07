import type { CardBrand } from '../utils/cardBrand/cardBrand.type';

export const isCardNumberLessLength = (cardNumber: string, cardBrand: CardBrand) => {
  switch (cardBrand) {
    case 'amex':
      return cardNumber.length < 15;

    case 'diners':
      return cardNumber.length < 14;

    default:
      return cardNumber.length < 16;
  }
};

export const isCardNumberOverLength = (cardNumber: string, cardBrand: CardBrand) => {
  switch (cardBrand) {
    case 'amex':
      return cardNumber.length > 15;

    case 'diners':
      return cardNumber.length > 14;

    default:
      return cardNumber.length > 16;
  }
};
