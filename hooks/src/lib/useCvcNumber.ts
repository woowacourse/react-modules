import { useState } from 'react';

const CVC_RULE = {
  INVALID_LENGTH_ERROR: 'CVC는 3자리로 입력해 주세요.',
  NOT_A_NUMBER: 'CVC는 숫자로 입력해 주세요.',
  MAX_LENGTH: 3,
} as const;

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
      setError({ isValidate: true, errorMessage: CVC_RULE.NOT_A_NUMBER });
      return;
    }
    if (value.length < CVC_RULE.MAX_LENGTH) {
      setError({
        isValidate: true,
        errorMessage: CVC_RULE.INVALID_LENGTH_ERROR,
      });
      return;
    }
    setError({ isValidate: false, errorMessage: '' });
  };

  return { cvc, error, updateCvc };
}
