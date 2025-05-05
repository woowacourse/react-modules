import { useState } from 'react';
import { INPUT_RULE } from './constants/inputRule';
import { ERROR_MESSAGE } from './constants/errorMessage';
import { isEmpty, isValidLength, isNumber } from './utils/validate';
import { isOverInputLength } from './utils/overInputLength';
import { initialError } from './utils/initial';
import { ErrorType } from './types/errorType';

type ValitationResult = {
  cvc: string;
  error: ErrorType;
  handleCvc: (value: string) => void;
};

type UpdateErrorArgs =
  | { isValid: true; errorMessage: string }
  | { isValid: false };

export default function useCvcNumber(): ValitationResult {
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState<ErrorType>(initialError);

  const updateError = (args: UpdateErrorArgs) => {
    setError({
      isValid: args.isValid,
      errorMessage: args.isValid ? args.errorMessage : '',
    });
  };

  const handleCvc = (value: string) => {
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

  return { cvc, error, handleCvc };
}
