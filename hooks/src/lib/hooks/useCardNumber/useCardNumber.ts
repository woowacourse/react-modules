import { useState } from 'react';
import useCardType from '../useCardType/useCardType';
import { CardType, formatCardNumber } from '../../utils/card';
import { getNumberErrorMessage, isNotNumber } from '../../utils/validation/validation';

import { CARD_TYPE } from '../../constants/Condition';

const useCardNumber = (initialValue: string = '') => {
  const [cardNumber, setCardNumber] = useState(initialValue);
  const [isValidCardNumber, setIsValidCardNumber] = useState(false);
  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState('');

  const { cardType, handleCardType } = useCardType();

  const handleCardNumberChange = (number: string) => {
    const numberCopy = number.replace(/\s/g, '');

    handleCardType(numberCopy);

    if (numberCopy.length > CARD_TYPE[cardType].VALID_LENGTH || isNotNumber(numberCopy)) return;

    const errorMessage = getNumberErrorMessage(numberCopy, CARD_TYPE[cardType].VALID_LENGTH);

    setCardNumberErrorMessage(errorMessage);
    setIsValidCardNumber(!errorMessage);
    setCardNumber(formatCardNumber(cardType as CardType, numberCopy));
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
