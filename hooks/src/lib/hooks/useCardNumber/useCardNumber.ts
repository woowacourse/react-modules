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

  const updateErrorMessage = (joinedNumber: string, maxLength: number) => {
    const errorMessage = getNumberErrorMessage(joinedNumber, maxLength);
    setCardNumberErrorMessage(errorMessage);

    return errorMessage;
  };

  const updateValidation = (errorMessage: string) => {
    setIsValidCardNumber(errorMessage === '');
  };

  const updateCardType = (joinedNumber: string) => {
    const detectedCardType = detectCardType(joinedNumber);
    setCardType(detectedCardType);
    return detectedCardType;
  };

  const handleCardNumberChange = (number: string) => {
    const joinedNumber = number.replace(/\s+/g, '');
    const newCardType = updateCardType(joinedNumber);
    const maxLength = CARD_TYPE[newCardType].MAX_LENGTH;

    if (joinedNumber.length > maxLength) return;

    const errorMessage = updateErrorMessage(joinedNumber, maxLength);
    updateValidation(errorMessage);

    if (isNotNumber(joinedNumber)) return;

    const formattedNumber = formatCardNumber(
      joinedNumber,
      CARD_TYPE[newCardType].PATTERN,
      CARD_TYPE[newCardType].MAX_LENGTH,
    );
    setCardNumber(formattedNumber);
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
