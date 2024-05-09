import { useState } from 'react';
import { CARD_CONFIG, CARD_NUMBER } from './constants/cardDataValidation';

const checkCardType = (cardNumber: string) => {
  const cardBrandNumber = parseInt(cardNumber.substring(0, 2), 10);
  const cardBrandNumberThree = parseInt(cardNumber.substring(0, 3), 10);
  const cardBrandNumberFour = parseInt(cardNumber.substring(0, 4), 10);
  const cardBrandNumberSix = parseInt(cardNumber.substring(0, 6), 10);

  if (Math.floor(cardBrandNumber / 10) === CARD_CONFIG.VISA) return 'Visa';
  if (
    CARD_CONFIG.MASTER.START <= cardBrandNumber &&
    cardBrandNumber <= CARD_CONFIG.MASTER.END
  )
    return 'MasterCard';

  if (cardBrandNumber === 36) {
    return 'Diners';
  }

  if (cardBrandNumber === 34 || cardBrandNumber === 37) {
    return 'AMEX';
  }

  if (
    (cardBrandNumberSix >= 622126 && cardBrandNumberSix <= 622925) ||
    (cardBrandNumberThree >= 624 && cardBrandNumberThree <= 626) ||
    (cardBrandNumberFour >= 6282 && cardBrandNumberFour <= 6288)
  ) {
    return 'UnionPay';
  }
  return 'Empty';
};

const useCardType = () => {
  const [cardType, setCardType] = useState<keyof typeof CARD_NUMBER>('Empty');

  const cardTypeHandler = (value: string) => {
    setCardType(checkCardType(value));
  };

  const formatCardNumber = (cardType: keyof typeof CARD_NUMBER) => {
    switch (cardType) {
      case 'Diners':
        return (cardNumbers: string) =>
          cardNumbers.replace(/(\d{4})(\d{6})(\d{4})/, '$1 $2 $3');
      case 'AMEX':
        return (cardNumbers: string) =>
          cardNumbers.replace(/(\d{4})(\d{6})(\d{5})/, '$1 $2 $3');
      case 'UnionPay':
      case 'Visa':
      case 'MasterCard':
        return (cardNumbers: string) =>
          cardNumbers.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
      default:
        return (cardNumbers: string) => cardNumbers;
    }
  };

  return {
    cardType,
    formatCardNumber: formatCardNumber(cardType),
    cardTypeHandler,
  };
};
export default useCardType;
