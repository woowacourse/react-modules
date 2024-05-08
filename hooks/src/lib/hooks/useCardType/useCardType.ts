import { useState } from 'react';
import { CardType, getCardType } from '../../utils/card';

import { CARD_TYPE } from '../../constants/Condition';

const useCardType = () => {
  const [cardType, setCardType] = useState<CardType>('DEFAULT');

  const handleCardType = (cardNumber: string) => {
    if (cardNumber.length > CARD_TYPE[cardType].MIN_LENGTH) return;

    const newCardType = getCardType(cardNumber);
    setCardType(newCardType);
  };

  return { cardType, handleCardType };
};

export default useCardType;
