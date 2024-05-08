import { CardBrand } from '../domain/cardBrand/cardBrand.type';

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

export const formatCardNumber = (cardNumber: string, cardBrand: string) => {
  const formattedParts = [];

  switch (cardBrand) {
    case 'diners':
    case 'amex':
      formattedParts.push(cardNumber.substring(0, 4));
      if (cardNumber.length > 4) {
        formattedParts.push(cardNumber.substring(4, 10));
      }
      if (cardNumber.length > 10) {
        formattedParts.push(cardNumber.substring(10, cardBrand === 'diners' ? 14 : 15));
      }
      break;

    default:
      formattedParts.push(cardNumber.substring(0, 4));
      if (cardNumber.length > 4) {
        formattedParts.push(cardNumber.substring(4, 8));
      }
      if (cardNumber.length > 8) {
        formattedParts.push(cardNumber.substring(8, 12));
      }
      if (cardNumber.length > 12) {
        formattedParts.push(cardNumber.substring(12, 16));
      }
      break;
  }

  return formattedParts;
};
