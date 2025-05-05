import { useState } from 'react';
import { VALIDATION_RULE } from './constants/validationRule';
import { ERROR_MESSAGE } from './constants/errorMessage';

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
    if (value.length > 3) return;

    validate(value);

    setCvc(value);
  };

  const validate = (value: string) => {
    if (value === '') {
      updateError({ isValid: false });
      return;
    }

    if (!/^\d*$/.test(value)) {
      updateError({
        isValid: true,
        errorMessage: ERROR_MESSAGE.CVC.NOT_A_NUMBER,
      });
      return;
    }
    if (value.length < VALIDATION_RULE.CVC.MAX_LENGTH) {
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
