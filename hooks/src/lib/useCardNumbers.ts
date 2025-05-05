import { useState } from 'react';
import { VALIDATION_RULE } from './constants/validationRule';
import { ERROR_MESSAGE } from './constants/errorMessage';

type ValitationResult = {
  numbers: string[];
  error: ErrorType[];
  updateCardNumbers: (value: string, index: number) => void;
};

type UpdateErrorArgs =
  | { index: number; isValid: true; errorMessage: string }
  | { index: number; isValid: false };

type ErrorType = {
  isValid: boolean;
  errorMessage: string;
};

const initialError = {
  isValid: false,
  errorMessage: '',
};

export default function useCardNumbers(): ValitationResult {
  const [numbers, setNumbers] = useState(['', '', '', '']);
  const [error, setError] = useState<ErrorType[]>(
    Array.from(
      { length: VALIDATION_RULE.CARD_NUMBERS.MAX_LENGTH },
      () => initialError
    )
  );

  const updateError = (args: UpdateErrorArgs) => {
    setError((prev) => {
      const updated = [...prev];
      updated[args.index] = {
        isValid: args.isValid,
        errorMessage: args.isValid ? args.errorMessage : '',
      };
      return updated;
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
      updateError({ index, isValid: false });
      return;
    }

    if (!/^\d*$/.test(value)) {
      updateError({
        index,
        isValid: true,
        errorMessage: ERROR_MESSAGE.CARD_NUMBERS.NOT_A_NUMBER,
      });
      return;
    }
    if (value.length < VALIDATION_RULE.CARD_NUMBERS.MAX_LENGTH) {
      updateError({
        index,
        isValid: true,
        errorMessage: ERROR_MESSAGE.CARD_NUMBERS.INVALID_LENGTH,
      });
      return;
    }
    updateError({ index, isValid: false });
  };

  return { numbers, error, updateCardNumbers };
}
