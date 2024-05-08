import { useState } from 'react';
import { getNumberErrorMessage, isNotNumber } from '../../utils/validation/validation';
import { CardType } from '../../types/cardType';
import detectCardType from '../../utils/detectCardType';
import { CARD_TYPE } from '../../constants/cardType';
import formatCardNumber from '../../utils/formatCardNumber';

export const VALID_CARD_NUMBER_LENGTH = 16;

const useCardNumber = (initialCardNumber: string = '') => {
  const [cardNumber, setCardNumber] = useState<string>(initialCardNumber);
  const [cardType, setCardType] = useState<CardType | null>(null); // 이전 카드 타입을 위해서 상태로 저장
  const [isValidCardNumber, setIsValidCardNumber] = useState<boolean>(false);
  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState<string>('');

  const handleCardNumberChange = (number: string) => {
    const joinedNumber = number.replace(/\s+/g, '');
    const detectedCardType = cardType === null || joinedNumber.length <= 6 ? detectCardType(joinedNumber) : cardType;

    if (joinedNumber.length > CARD_TYPE[detectedCardType].MAX_LENGTH) return;

    const errorMessage = getNumberErrorMessage(joinedNumber, CARD_TYPE[detectedCardType].MAX_LENGTH);
    setCardNumberErrorMessage(errorMessage);

    if (isNotNumber(joinedNumber)) return;

    setIsValidCardNumber(errorMessage === '');

    const formattedNumber = formatCardNumber(joinedNumber, CARD_TYPE[detectedCardType].PATTERN);
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
