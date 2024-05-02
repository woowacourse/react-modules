import { useState } from 'react';
import { getNumberErrorMessage, isNotNumber } from '../../utils/validation/validation';
import { updateArray } from '../../utils/updateArray';

export const VALID_CARD_NUMBER_LENGTH = 16;

const useCardNumber = (unitCount: number, singleUnitLength: number) => {
  const [cardNumber, setCardNumber] = useState<string[]>(new Array(unitCount).fill(''));
  const [isValidCardNumbers, setIsValidCardNumbers] = useState<boolean[]>(
    new Array(unitCount).fill(false)
  );
  const [cardNumberErrorMessages, setCardNumberErrorMessages] = useState<string[]>(
    new Array(unitCount).fill('')
  );

  const handleCardNumberChange = (number: string, index: number) => {
    if (number.length > singleUnitLength) return;

    const errorMessage = getNumberErrorMessage(number, singleUnitLength);
    setCardNumberErrorMessages(updateArray(cardNumberErrorMessages, errorMessage, index));

    if (isNotNumber(number)) return;

    setIsValidCardNumbers(updateArray(isValidCardNumbers, !errorMessage, index));
    setCardNumber(updateArray(cardNumber, number, index));
  };

  return {
    cardNumber,
    handleCardNumberChange,
    isValidCardNumbers,
    cardNumberErrorMessages,
  };
};

export default useCardNumber;
