import { useState } from 'react';
import { CardNumber, CardNumberError } from '../types/cardTypes';
import { CARD_NUMBER_ERROR } from '../constants/errorMessages';
import { isOnlyDigits } from '../utils/validateNumber';
import { CARD_NUMBER } from '../constants/cardConfig';

export const useCardNumber = (initialCardNumber: CardNumber, initialError: CardNumberError) => {
  const [cardNumber, setCardNumber] = useState<CardNumber>(initialCardNumber);
  const [cardNumberError, setCardNumberError] = useState<CardNumberError>(initialError);

  const handleCardNumberChange = ({ name, value }: { name: string; value: string }) => {
    const updatedError = { ...cardNumberError };
    const cardFields: Array<keyof CardNumberError> = ['first', 'second', 'third', 'forth'];

    cardFields.forEach((field) => {
      if (field !== name && updatedError[field] === CARD_NUMBER_ERROR.onlyNumbers) {
        updatedError[field] = '';
      }
    });

    const isNumber = isOnlyDigits(value);

    if (!isNumber && value !== '') {
      setCardNumberError({
        ...updatedError,
        [name]: CARD_NUMBER_ERROR.onlyNumbers,
      });

      return;
    }

    setCardNumber({
      ...cardNumber,
      [name]: value,
    });

    setCardNumberError({
      ...updatedError,
      [name]: '',
    });
  };

  const isCardNumberValid = () => {
    const { first, second, third, forth } = cardNumber;

    return (
      first.length === CARD_NUMBER.maxLength &&
      second.length === CARD_NUMBER.maxLength &&
      third.length === CARD_NUMBER.maxLength &&
      forth.length === CARD_NUMBER.maxLength
    );
  };

  return {
    cardNumber,
    cardNumberError,
    handleCardNumberChange,
    isCardNumberValid,
  };
};
