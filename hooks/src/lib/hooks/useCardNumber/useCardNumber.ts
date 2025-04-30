import { useState } from 'react';
import { validateCardInput } from '../../validation/cardNumberLengthInfo';

import { CardInputItem } from '../../types/cardInputItem.types';

const CARD_NUMBER_INPUTS_LENGTH = 4;

export const useCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState<CardInputItem[]>(
    Array.from({ length: CARD_NUMBER_INPUTS_LENGTH }, () => ({ value: '', isValid: true }))
  );

  const [errorMessage, setErrorMessage] = useState('');

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = event.target.value;

    const { isValid, errorMessage } = validateCardInput(newValue, CARD_NUMBER_INPUTS_LENGTH);

    setCardNumbers((prev) => {
      const newCardNumbers = [...prev];
      newCardNumbers[index].value = newValue;
      newCardNumbers[index].isValid = isValid;
      return newCardNumbers;
    });

    if (!isValid) {
      setErrorMessage(errorMessage);
    }
  };

  return {
    cardNumbers,
    errorMessage,
    handleCardNumberChange,
  };
};
