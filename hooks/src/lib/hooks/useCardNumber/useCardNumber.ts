import { useState } from 'react';
import useCardType from '../useCardType/useCardType';
import { formatCardNumber } from '../../utils/card';
import { getNumberErrorMessage, isNotNumber } from '../../utils/validation/validation';
import { CARD_TYPE } from '../../constants/Condition';

import type { CardType } from '../../types/common.type';

const useCardNumber = (initialValue: string = '') => {
  const [cardNumber, setCardNumber] = useState(initialValue);
  const [isValidCardNumber, setIsValidCardNumber] = useState(false);
  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState('');

  const { cardType, handleCardType }: { cardType: CardType; handleCardType: (cardNumber: string) => void } =
    useCardType();

  const validateCardNumber = (number: string) => {
    const errorMessage = getNumberErrorMessage(number, CARD_TYPE[cardType].VALID_LENGTH);

    setCardNumberErrorMessage(errorMessage);
    setIsValidCardNumber(!errorMessage);
  };

  const handleCardNumberChange = (number: string) => {
    const cleanNumber = number.replace(/\s/g, '');

    handleCardType(cleanNumber);

    if (cleanNumber.length > CARD_TYPE[cardType].VALID_LENGTH) return;

    validateCardNumber(cleanNumber);

    if (isNotNumber(cleanNumber)) return;

    setCardNumber(formatCardNumber(cardType, cleanNumber));
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
