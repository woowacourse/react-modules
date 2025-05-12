import { useState, ChangeEvent } from 'react';
import { CardNumber, CardNumberError } from '../types/cardTypes';
import { CARD_NUMBER_ERROR } from '../constants/errorMessages';
import { isOnlyDigits } from '../utils/validateNumber';
import { CARD_NUMBER } from '../constants/cardConfig';
import { useCardFormatter } from "../useCardFormatter";
import { useCardBrandValidation } from "../useCardBrandValidation";

export const useCardNumber = (initialCardNumber: CardNumber, initialError: CardNumberError) => {
  const [cardNumber, setCardNumber] = useState<CardNumber>(initialCardNumber);
  const [cardNumberError, setCardNumberError] = useState<CardNumberError>(initialError);
  const rawNumber = `${cardNumber.first}${cardNumber.second}${cardNumber.third}${cardNumber.fourth}`;
  const { formattedNumber, handleCardNumberChange: handleFormatChange } = useCardFormatter(rawNumber);
  const { cardBrand, isValid: isBrandValid, error: brandError } = useCardBrandValidation(formattedNumber);

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    handleFormatChange(e);

    const parts = formattedNumber.split(' ');
    setCardNumber({
      first: parts[0] ?? '',
      second: parts[1] ?? '',
      third: parts[2] ?? '',
      fourth: parts[3] ?? '',
    });

    const isNumber = isOnlyDigits(value);

    if (!isNumber && value !== '') {
      setCardNumberError(prevErrors => ({
        ...prevErrors,
        [name]: CARD_NUMBER_ERROR.onlyNumbers,
      }));

      return;
    }

    if (brandError) {
      setCardNumberError(prevErrors => ({
        ...prevErrors,
        [name]: brandError,
      }));
    } else {
      setCardNumberError(prevErrors => ({
        ...prevErrors,
        [name]: null,
      }));
    }
  };

  const isCardNumberValid = () => {
    const { first, second, third, fourth } = cardNumber;
    const length = CARD_NUMBER.maxLength;

    const isBasicFormatValid = (
      first.length === length &&
      second.length === length &&
      third.length === length &&
      fourth.length === length
    );

    return isBasicFormatValid && isBrandValid;
  };

  return {
    cardNumber,
    cardNumberError,
    formattedNumber,
    cardBrand,
    isBrandValid,
    brandError,
    handleCardNumberChange,
    isCardNumberValid,
  };
};
