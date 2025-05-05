import { useState } from 'react';
import { VALIDATION_RULE } from './constants/validationRule';
import { ERROR_MESSAGE } from './constants/errorMessage';

type ValitationResult = {
  cvc: string;
  error: errorType;
  updateCvc: (value: string) => void;
};

type errorType = {
  isValidate: boolean;
  errorMessage: string;
};

const initialError = {
  isValidate: false,
  errorMessage: '',
};

export default function useCvcNumber(): ValitationResult {
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState<errorType>(initialError);

  const updateCvc = (value: string) => {
    if (value.length > 3) return;

    validate(value);

    setCvc(value);
  };

  const validate = (value: string) => {
    if (value === '') {
      setError({ isValidate: true, errorMessage: '' });
      return;
    }

    if (!/^\d*$/.test(value)) {
      setError({
        isValidate: true,
        errorMessage: ERROR_MESSAGE.CVC.NOT_A_NUMBER,
      });
      return;
    }
    if (value.length < VALIDATION_RULE.CVC.MAX_LENGTH) {
      setError({
        isValidate: true,
        errorMessage: ERROR_MESSAGE.CVC.INVALID_LENGTH,
      });
      return;
    }
    setError({ isValidate: false, errorMessage: '' });
  };

  return { cvc, error, updateCvc };
}
