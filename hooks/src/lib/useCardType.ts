import { useState } from 'react';
import {
  CARD_BRAND_NUMBER_LENGTH,
  CARD_CONFIG,
} from './constants/cardDataValidation';
import formatFunctions from './constants/formatFunction';

export type CardType = {
  name: keyof typeof CARD_BRAND_NUMBER_LENGTH;
  maxLength: number;
};

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
  const [cardType, setCardType] = useState<CardType>({
    name: 'Empty',
    maxLength: 16,
  });

  const cardTypeHandler = (value: string) => {
    const cardTypeName = checkCardType(value);
    setCardType({
      name: cardTypeName,
      maxLength: CARD_BRAND_NUMBER_LENGTH[cardTypeName],
    });
  };

  return {
    cardType,
    formatCardNumber: formatFunctions[cardType.name],
    cardTypeHandler,
  };
};
export default useCardType;
