import { useEffect, useState } from 'react';
import { ERROR_MESSAGE } from '../constants/errorMessage';
import {
  isEmpty,
  isValidLength,
  isNumber,
  isValidCardBrand,
} from '../utils/validate';
import { isOverInputLength } from '../utils/overInputLength';
import { initialError } from '../utils/initial';
import { ErrorType } from '../types/errorType';
import { getCardBrandInfo, getFormattedNumber } from '../utils/cardBrandUtils';
import { CardBrandType } from '../types/cardTypes';

interface ValitationResult {
  formattedNumber: string;
  cardBrand: CardBrandType | null;
  error: ErrorType;
  handleCardNumbers: (value: string) => void;
}

type UpdateErrorArgs =
  | { isValid: true; errorMessage: string }
  | { isValid: false };

interface ValidateParams {
  value: string;
  brand: CardBrandType | null;
  length: number;
}

export default function useCardNumbers(): ValitationResult {
  const [numbers, setNumbers] = useState('');
  const [error, setError] = useState<ErrorType>(initialError);

  const { cardBrand, cardNumberLength, format } = getCardBrandInfo(numbers);

  const numberWithoutSpaces = numbers.replace(/\s/g, '');
  const formattedNumber = getFormattedNumber(numberWithoutSpaces, format) || '';

  const handleCardNumbers = (value: string) => {
    const numberWithoutSpaces = value.replace(/\s/g, '');
    if (isOverInputLength(numberWithoutSpaces, cardNumberLength)) return;

    setNumbers(numberWithoutSpaces);
  };

  useEffect(() => {
    validate({
      value: numberWithoutSpaces,
      brand: cardBrand,
      length: cardNumberLength,
    });
  }, [numberWithoutSpaces, cardBrand, cardNumberLength]);

  const updateError = (args: UpdateErrorArgs) => {
    setError({
      isValid: args.isValid,
      errorMessage: args.isValid ? args.errorMessage : '',
    });
  };

  const validate = ({ value, brand, length }: ValidateParams) => {
    if (isEmpty(value)) {
      updateError({ isValid: false });
      return;
    }

    if (!isNumber(value)) {
      updateError({
        isValid: true,
        errorMessage: ERROR_MESSAGE.CARD_NUMBERS.NOT_A_NUMBER,
      });
      return;
    }

    if (!brand || !isValidCardBrand(brand)) {
      updateError({
        isValid: true,
        errorMessage: ERROR_MESSAGE.CARD_NUMBERS.INVALID_NUMBER,
      });
      return;
    }

    if (!isValidLength(value, length)) {
      updateError({
        isValid: true,
        errorMessage: ERROR_MESSAGE.CARD_NUMBERS.INVALID_LENGTH(length),
      });
      return;
    }

    updateError({ isValid: false });
  };

  return {
    formattedNumber,
    cardBrand,
    error,
    handleCardNumbers,
  };
}
