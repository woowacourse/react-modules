import { useState } from 'react';
import { CARD_BRAND_NUMBER_LENGTH } from './constants/cardDataValidation';
import formatFunctions from './constants/formatFunction';
import cardTypeCheck from './constants/cardTypeChecks';

export type CardType = {
  name: keyof typeof CARD_BRAND_NUMBER_LENGTH;
  maxLength: number;
};

const checkCardType = (cardNumber: string) => {
  const cardType = cardTypeCheck.find((cardType) => cardType.check(cardNumber));
  return cardType ? cardType.name : 'Empty';
};

const useCardType = () => {
  const [cardType, setCardType] = useState<CardType>({
    name: 'Empty',
    maxLength: 16,
  });

  const cardTypeHandler = (value: string) => {
    const cardTypeName: keyof typeof CARD_BRAND_NUMBER_LENGTH =
      checkCardType(value);
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
