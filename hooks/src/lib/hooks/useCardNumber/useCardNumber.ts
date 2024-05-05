import { useState } from 'react';
import { getNumberErrorMessage, isNotNumber } from '../../utils/validation/validation';
import { updateArray } from '../../utils/updateArray';

export const VALID_CARD_NUMBER_LENGTH = 16;

const useCardNumber = (lengthList: number[]) => {
  const [cardNumber, setCardNumber] = useState<string[]>(new Array(lengthList.length).fill(''));
  const [isValidCardNumbers, setIsValidCardNumbers] = useState<boolean[]>(new Array(lengthList.length).fill(false));
  const [cardNumberErrorMessages, setCardNumberErrorMessages] = useState<string[]>(
    new Array(lengthList.length).fill(''),
  );

  const handleCardNumberChange = (number: string, index: number) => {
    if (number.length > lengthList[index]) return;

    const errorMessage = getNumberErrorMessage(number, lengthList[index]);
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
