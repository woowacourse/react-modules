import { useEffect, useState } from 'react';
import { CARD_NUMBER_LENGTH } from './useCardNumbers';

const VISA_START_NUMBER = 4;
const MASTERCARD_START_NUMBER = {
  min: 51,
  max: 55,
};

const useCardType = (cardNumbers: string[]) => {
  const [cardBrand, setCardBrand] = useState('');

  const isValidCardNumbersLength = (cardNumbers: string[]) => {
    return cardNumbers.join('').length === CARD_NUMBER_LENGTH * cardNumbers.length;
  };

  const isVisa = (cardNumbers: string[]) => {
    return cardNumbers[0].startsWith(`${VISA_START_NUMBER}`);
  };

  const isMasterCard = (cardNumbers: string[]) => {
    const firstTwoDigits = Number(cardNumbers[0].slice(0, 2));

    return firstTwoDigits >= MASTERCARD_START_NUMBER.min && firstTwoDigits <= MASTERCARD_START_NUMBER.max;
  };

  useEffect(() => {
    if (isValidCardNumbersLength(cardNumbers)) {
      if (isVisa(cardNumbers)) {
        setCardBrand('visa');
        return;
      }

      if (isMasterCard(cardNumbers)) {
        setCardBrand('mastercard');
        return;
      }
    }

    setCardBrand('');
  }, [...cardNumbers]);

  return cardBrand;
};

export default useCardType;
