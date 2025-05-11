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
  getFormattedNumber,
  identifyCardBrand,
} from '../utils/cardBrandUtils';

type ValitationResult = {
  formattedNumber: string;
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

  const digits = numbers.replace(/\s/g, '');
  const formattedNumber = getFormattedNumber(digits, format) || '';

  const updateError = (args: UpdateErrorArgs) => {
    setError({
      isValid: args.isValid,
      errorMessage: args.isValid ? args.errorMessage : '',
    });
  };

  const handleCardNumbers = (value: string) => {
    const digits = value.replace(/\s/g, '');
    if (isOverInputLength(digits, cardNumberLength)) return;

    setNumbers(digits);
  };

  useEffect(() => {
    validate(digits, cardBrand, cardNumberLength);
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
    cardBrand: identifyCardBrand(numbers),
    error,
    handleCardNumbers,
  };
}
