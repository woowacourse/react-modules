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
import {
  getCardNumberLength,
  getFormat,
  identifyCardBrand,
} from '../utils/cardBrandUtils';

type ValitationResult = {
  numbers: string;
  cardBrand: string;
  error: ErrorType;
  handleCardNumbers: (value: string) => void;
};

type UpdateErrorArgs =
  | { isValid: true; errorMessage: string }
  | { isValid: false };

export default function useCardNumbers(): ValitationResult {
  const [numbers, setNumbers] = useState('');
  const [error, setError] = useState<ErrorType>(initialError);
  const cardBrand = identifyCardBrand(numbers);
  const cardNumberLength = getCardNumberLength(cardBrand);
  const format = getFormat(cardBrand);

  const updateError = (args: UpdateErrorArgs) => {
    setError({
      isValid: args.isValid,
      errorMessage: args.isValid ? args.errorMessage : '',
    });
  };

  const handleCardNumbers = (value: string) => {
    if (isOverInputLength(value, cardNumberLength)) return;

    setNumbers(value);
  };

  useEffect(() => {
    validate(numbers, cardBrand, cardNumberLength);
  }, [numbers, cardBrand, cardNumberLength]);

  const validate = (value: string, brand: string, length: number) => {
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

    if (!isValidCardBrand(brand)) {
      console.log('barnd', brand);
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
    console.log('before false');
    updateError({ isValid: false });
  };

  return {
    numbers,
    cardBrand: identifyCardBrand(numbers),
    error,
    handleCardNumbers,
  };
}
