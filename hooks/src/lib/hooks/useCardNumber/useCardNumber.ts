import { useState } from 'react';
import { formatCardNumber, getCardType } from '../../utils/card/card';
import { getNumberErrorMessage, isNotNumber } from '../../utils/validation/validation';
import type { CardType } from '../../utils/card/card.type';
import { CARD_TYPE } from '../../constants/Condition';

const useCardNumber = (initialValue: string = '') => {
  const [cardNumber, setCardNumber] = useState(initialValue);
  const [isValidCardNumber, setIsValidCardNumber] = useState(false);
  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState('');

  const [cardType, setCardType] = useState(getCardType(initialValue));

  const validateCardNumber = (cardType: CardType, number: string) => {
    const errorMessage = getNumberErrorMessage(number, CARD_TYPE[cardType].VALID_LENGTH);

    setCardNumberErrorMessage(errorMessage);
    setIsValidCardNumber(!errorMessage);
  };

  const handleCardNumberChange = (number: string) => {
    const cleanNumber = number.replace(/\s/g, '');
    const newCardType = getCardType(cleanNumber);

    if (cleanNumber.length > CARD_TYPE[newCardType].VALID_LENGTH) return;

    validateCardNumber(newCardType, cleanNumber);

    if (isNotNumber(cleanNumber)) return;

    setCardType(newCardType);
    setCardNumber(formatCardNumber(newCardType, cleanNumber));
  };

  return {
    cardNumber,
    cardType,
    handleCardNumberChange,
    isValidCardNumber,
    cardNumberErrorMessage,
  };
};

export default useCardNumber;
