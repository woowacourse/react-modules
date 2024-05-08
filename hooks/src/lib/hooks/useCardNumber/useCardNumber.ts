import { useState } from 'react';
import useCardType from '../useCardType/useCardType';
import { getNumberErrorMessage, isNotNumber } from '../../utils/validation/validation';
import { getValidCardNumberLength, formatCardNumber, CardType } from '../../utils/card';

export const VALID_CARD_NUMBER_LENGTH = 16;

const useCardNumber = (initialValue: string = '') => {
  const [cardNumber, setCardNumber] = useState<string>(initialValue);
  const [isValidCardNumber, setIsValidCardNumber] = useState<boolean>(false);
  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState<string>('');

  const { cardType, handleCardType } = useCardType();

  const handleCardNumberChange = (number: string) => {
    const numberCopy = number.replace(/\s/g, '');

    handleCardType(numberCopy);

    const validCardNumberLength = getValidCardNumberLength(cardType as CardType);

    if (numberCopy.length > validCardNumberLength) return;

    const errorMessage = getNumberErrorMessage(numberCopy, validCardNumberLength);
    setCardNumberErrorMessage(errorMessage);

    if (isNotNumber(numberCopy)) return;

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
