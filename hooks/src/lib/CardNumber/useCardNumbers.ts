import { useState } from 'react';

import useCardNumbersValidate from './useCardNumbersValidate';
import { cardTypeRules } from './cardTypeRules';
import {
  getCardType,
  getFormattedCardNumber,
  getCardNumberMaxLength,
} from './cardNumberUtil';

type CardType = keyof typeof cardTypeRules;

export type CardNumbersResult = {
  cardNumbers: string;
  formattedCardNumbers: string;
  cardType: CardType | null;
  cardNumberMaxLength: number;
  errorMessage: string | null;
  handleCardNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardNumberBlur: () => void;
};

const useCardNumbers = (): CardNumbersResult => {
  const [cardNumbers, setCardNumbers] = useState<string>('');
  const [cardType, setCardType] = useState<CardType | null>(null);
  const { errorMessage, validateCardNumbers, validateCardNumberBlur } =
    useCardNumbersValidate();

  const cardNumberMaxLength = getCardNumberMaxLength(cardType);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardType(getCardType(e.target.value));

    validateCardNumbers(e.target.value);
    setCardNumbers(e.target.value);
  };

  const handleCardNumberBlur = () => {
    validateCardNumberBlur(cardNumbers, cardType);
  };

  const formattedCardNumbers = getFormattedCardNumber(cardNumbers, cardType);

  return {
    cardNumbers,
    formattedCardNumbers,
    cardType,
    cardNumberMaxLength,
    errorMessage,
    handleCardNumberChange,
    handleCardNumberBlur,
  };
};

export default useCardNumbers;
