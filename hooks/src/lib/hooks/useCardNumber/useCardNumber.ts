import { useState } from 'react';
import { getNumberErrorMessage, isNotNumber } from '../../utils/validation/validation';
import { CardType } from '../../types/cardType';
import detectCardType from '../../utils/detectCardType';
import { CARD_TYPE } from '../../constants/cardType';
import formatCardNumber from '../../utils/formatCardNumber';

export const VALID_CARD_NUMBER_LENGTH = 16;

const useCardNumber = (initialCardNumber: string = '') => {
  const [cardNumber, setCardNumber] = useState<string>(initialCardNumber);
  const [cardType, setCardType] = useState<CardType | null>(null);
  const [isValidCardNumber, setIsValidCardNumber] = useState<boolean>(false);
  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState<string>('');

  const handleCardNumberChange = (number: string) => {
    const joinedNumber = number.replace(/\s+/g, '');
    const detectedCardType = detectCardType(joinedNumber);
    const maxLength = CARD_TYPE[detectedCardType].MAX_LENGTH;

    if (joinedNumber.length > maxLength) return;

    const errorMessage = getNumberErrorMessage(joinedNumber, maxLength);

    if (isNotNumber(joinedNumber)) {
      setCardNumberErrorMessage(errorMessage);
      return;
    }

    const slicedNumber = joinedNumber.slice(0, CARD_TYPE[detectedCardType].MAX_LENGTH);
    const formattedNumber = formatCardNumber(slicedNumber, CARD_TYPE[detectedCardType].PATTERN);

    setCardNumberErrorMessage(errorMessage);
    setIsValidCardNumber(errorMessage === '');
    setCardNumber(formattedNumber);
    setCardType(detectedCardType);
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
