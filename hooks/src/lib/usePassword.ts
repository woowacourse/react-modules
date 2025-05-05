import { useState } from 'react';
import { VALIDATION_RULE } from './constants/validationRule';
import { ERROR_MESSAGE } from './constants/errorMessage';

type ValitationResult = {
  password: string;
  error: errorType;
  updatePassword: (value: string) => void;
};

type errorType = {
  isValid: boolean;
  errorMessage: string;
};

const InitialError = {
  isValid: false,
  errorMessage: '',
};

export default function usePassword(): ValitationResult {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(InitialError);

  const updatePassword = (value: string) => {
    if (value.length > VALIDATION_RULE.PASSWORD.MAX_LENGTH) return;

    validate(value);

    setPassword(value);
  };

  const validate = (value: string) => {
    if (value === '') {
      setError({ isValid: false, errorMessage: '' });
      return;
    }

    if (!/^\d*$/.test(value)) {
      setError({
        isValid: true,
        errorMessage: ERROR_MESSAGE.PASSWORD.NOT_A_NUMBER,
      });
      return;
    }
    if (value.length < VALIDATION_RULE.PASSWORD.MAX_LENGTH) {
      setError({
        isValid: true,
        errorMessage: ERROR_MESSAGE.PASSWORD.INVALID_LENGTH,
      });
      return;
    }
    setError({ isValid: false, errorMessage: '' });
  };

  return { password, error, updatePassword };
}
