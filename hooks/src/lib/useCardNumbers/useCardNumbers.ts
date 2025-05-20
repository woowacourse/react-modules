import { useState } from 'react';
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
import { getCardBrandInfo } from '../utils/cardBrandUtils';
import { CardBrandType } from '../types/cardTypes';

interface ValitationResult {
  numbers: string;
  cardBrand: CardBrandType | null;
  format: number[];
  error: ErrorType;
  handleCardNumbers: (value: string) => void;
}

type UpdateErrorArgs =
  | { isValid: false; errorMessage: string }
  | { isValid: true };
interface ValidateParams {
  value: string;
  brand: CardBrandType | null;
  length: number;
}

export default function useCardNumbers(): ValitationResult {
  const [numbers, setNumbers] = useState('');
  const [error, setError] = useState<ErrorType>(initialError);

  const { cardBrand, cardNumberLength, format } = getCardBrandInfo(numbers);

  const handleCardNumbers = (value: string) => {
    if (isOverInputLength(value, cardNumberLength)) return;

    validate({
      value: value,
      brand: cardBrand,
      length: cardNumberLength,
    });

    setNumbers(value);
  };

  const updateError = (args: UpdateErrorArgs) => {
    setError({
      isValid: args.isValid,
      errorMessage: args.isValid === false ? args.errorMessage : '',
    });
  };

  const validate = ({ value, brand, length }: ValidateParams) => {
    if (isEmpty(value)) {
      updateError({ isValid: true });
      return;
    }

    if (!isNumber(value)) {
      updateError({
        isValid: false,
        errorMessage: ERROR_MESSAGE.CARD_NUMBERS.NOT_A_NUMBER,
      });
      return;
    }

    if (!brand || !isValidCardBrand(brand)) {
      updateError({
        isValid: false,
        errorMessage: ERROR_MESSAGE.CARD_NUMBERS.INVALID_NUMBER,
      });
      return;
    }

    if (!isValidLength(value, length)) {
      updateError({
        isValid: false,
        errorMessage: ERROR_MESSAGE.CARD_NUMBERS.INVALID_LENGTH(length),
      });
      return;
    }

    updateError({ isValid: true });
  };

  return {
    numbers,
    cardBrand,
    format,
    error,
    handleCardNumbers,
  };
}
