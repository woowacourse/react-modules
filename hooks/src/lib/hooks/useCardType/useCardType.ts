import { useState } from 'react';
import { getCardType } from '../../utils/card';
import { CARD_TYPE } from '../../constants/Condition';

import type { CardType } from '../../types/common.type';

const useCardType = (initialValue: CardType = 'DEFAULT') => {
  const [cardType, setCardType] = useState<CardType>(initialValue);

  const handleCardType = (cardNumber: string) => {
    if (cardNumber.length > CARD_TYPE[cardType].MIN_LENGTH) return;

    const newCardType = getCardType(cardNumber);
    setCardType(newCardType);
  };

  return { cardType, handleCardType };
};

export default useCardType;
