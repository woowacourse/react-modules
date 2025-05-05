import { useState } from 'react';
import { VALIDATION_RULE } from './constants/validationRule';
import { ERROR_MESSAGE } from './constants/errorMessage';

type ValitationResult = {
  numbers: string[];
  error: errorType[];
  updateCardNumbers: (value: string, index: number) => void;
};

type errorType = {
  isValidate: boolean;
  errorMessage: string;
};

const initialError = {
  isValidate: false,
  errorMessage: '',
};

export default function useCardNumbers(): ValitationResult {
  const [numbers, setNumbers] = useState(['', '', '', '']);
  const [error, setError] = useState<errorType[]>(
    Array.from(
      { length: VALIDATION_RULE.CARD_NUMBERS.MAX_LENGTH },
      () => initialError
    )
  );

  const updateError = (index: number, isError: boolean, message: string) => {
    setError((prev) => {
      prev[index] = {
        isValidate: isError,
        errorMessage: message,
      };
      return prev;
    });
  };

  const updateCardNumbers = (value: string, index: number) => {
    if (value.length > VALIDATION_RULE.CARD_NUMBERS.MAX_LENGTH) return;

    validate(value, index);

    setNumbers((prev) => {
      const newNumbers = [...prev];
      newNumbers[index] = value;
      return newNumbers;
    });
  };

  const validate = (value: string, index: number) => {
    if (value === '') {
      updateError(index, false, '');
      return;
    }

    if (!/^\d*$/.test(value)) {
      updateError(index, true, ERROR_MESSAGE.CARD_NUMBERS.NOT_A_NUMBER);
      return;
    }
    if (value.length < VALIDATION_RULE.CARD_NUMBERS.MAX_LENGTH) {
      updateError(index, true, ERROR_MESSAGE.CARD_NUMBERS.INVALID_LENGTH);
      return;
    }
    updateError(index, false, '');
  };

  return { numbers, error, updateCardNumbers };
}
