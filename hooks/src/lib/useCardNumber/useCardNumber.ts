import { useState, ChangeEvent } from 'react';
import { CardNumber, CardNumberError } from '../types/cardTypes';
import { CARD_NUMBER_ERROR } from '../constants/errorMessages';
import { isOnlyDigits } from '../utils/validateNumber';
import { CARD_NUMBER } from '../constants/cardConfig';

export const useCardNumber = (initialCardNumber: CardNumber, initialError: CardNumberError) => {
  const [cardNumber, setCardNumber] = useState<CardNumber>(initialCardNumber);
  const [cardNumberError, setCardNumberError] = useState<CardNumberError>(initialError);

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const updatedError = { ...cardNumberError };
    const cardFields: Array<keyof CardNumberError> = ['first', 'second', 'third', 'fourth'];

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

    setCardNumberError(prevErrors => ({
      ...prevErrors,
      [name]: CARD_NUMBER_ERROR.onlyNumbers,
    }));
  };

  const isCardNumberValid = () => {
    const { first, second, third, fourth } = cardNumber;

    return (
      first.length === CARD_NUMBER.maxLength &&
      second.length === CARD_NUMBER.maxLength &&
      third.length === CARD_NUMBER.maxLength &&
      fourth.length === CARD_NUMBER.maxLength
    );
  };

  return {
    cardNumber,
    cardNumberError,
    handleCardNumberChange,
    isCardNumberValid,
  };
};
