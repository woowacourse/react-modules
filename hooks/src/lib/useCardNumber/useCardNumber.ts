import { useState } from 'react';

import useCardNumberValidation from './useCardNumberValidation';

import { CARD_NUMBER_ERROR_TYPE } from './useCardNumber.constant';

const useCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const { cardNumberError, validateCardNumbers } = useCardNumberValidation(cardNumbers);

  const handleChangeCardNumber = (cardIndex: number, value: string) => {
    const errorType = validateCardNumbers(cardIndex, value.slice(0, 4));

    if (errorType === CARD_NUMBER_ERROR_TYPE.nonNumeric || value.length > 4) return;

    setCardNumbers((prevCardNumbers) => {
      prevCardNumbers[cardIndex] = value;

      return prevCardNumbers;
    });
  };

  return { cardNumbers, cardNumberError, handleChangeCardNumber };
};

export default useCardNumber;
