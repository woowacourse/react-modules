import { useState } from 'react';
import { CardType, getCardType } from '../../utils/card';

const MIN_CARD_NUMBER_LENGTH: Record<CardType, number> = {
  VISA: 1,
  MASTERCARD: 2,
  DINERS: 2,
  AMEX: 2,
  UNIONPAY: 6,
  DEFAULT: 6,
};

const useCardType = () => {
  const [cardType, setCardType] = useState<CardType>('DEFAULT');

  const handleCardType = (cardNumber: string) => {
    if (cardNumber.length > MIN_CARD_NUMBER_LENGTH[cardType]) return;

    const newCardType = getCardType(cardNumber);
    setCardType(newCardType);
  };

  return { cardType, handleCardType };
};

export default useCardType;
