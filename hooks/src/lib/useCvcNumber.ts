import { useState } from 'react';
import { INPUT_RULE } from './constants/inputRule';
import { ERROR_MESSAGE } from './constants/errorMessage';
import { isEmpty, isValidLength, isNumber } from './utils/validate';
import { isOverInputLength } from './utils/overInputLength';

type ValitationResult = {
  cvc: string;
  error: ErrorType;
  updateCvc: (value: string) => void;
};

type UpdateErrorArgs =
  | { isValid: true; errorMessage: string }
  | { isValid: false };

type ErrorType = {
  isValid: boolean;
  errorMessage: string;
};

const initialError = {
  isValid: false,
  errorMessage: '',
};

export default function useCvcNumber(): ValitationResult {
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState<ErrorType>(initialError);

  const updateError = (args: UpdateErrorArgs) => {
    setError({
      isValid: args.isValid,
      errorMessage: args.isValid ? args.errorMessage : '',
    });
  };

  const updateCvc = (value: string) => {
    if (isOverInputLength(value, INPUT_RULE.CVC.MAX_LENGTH)) return;

    validate(value);

    setCvc(value);
  };

  const validate = (value: string) => {
    if (isEmpty(value)) {
      updateError({ isValid: false });
      return;
    }

    if (!isNumber(value)) {
      updateError({
        isValid: true,
        errorMessage: ERROR_MESSAGE.CVC.NOT_A_NUMBER,
      });
      return;
    }
    if (!isValidLength(value, INPUT_RULE.CVC.MAX_LENGTH)) {
      updateError({
        isValid: true,
        errorMessage: ERROR_MESSAGE.CVC.INVALID_LENGTH,
      });
      return;
    }
    updateError({ isValid: false });
  };

  return { cvc, error, updateCvc };
}
