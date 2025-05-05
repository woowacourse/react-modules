import { useState } from 'react';
import { VALIDATION_RULE } from './constants/validationRule';
import { ERROR_MESSAGE } from './constants/errorMessage';

type ValitationResult = {
  password: string;
  error: errorType;
  updatePassword: (value: string) => void;
};

type UpdateErrorArgs =
  | { isValid: true; errorMessage: string }
  | { isValid: false };

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

  const updateError = (args: UpdateErrorArgs) => {
    setError({
      isValid: args.isValid,
      errorMessage: args.isValid ? args.errorMessage : '',
    });
  };

  const updatePassword = (value: string) => {
    if (value.length > VALIDATION_RULE.PASSWORD.MAX_LENGTH) return;

    validate(value);

    setPassword(value);
  };

  const validate = (value: string) => {
    if (value === '') {
      updateError({ isValid: false });
      return;
    }

    if (!/^\d*$/.test(value)) {
      updateError({
        isValid: true,
        errorMessage: ERROR_MESSAGE.PASSWORD.NOT_A_NUMBER,
      });
      return;
    }
    if (value.length < VALIDATION_RULE.PASSWORD.MAX_LENGTH) {
      updateError({
        isValid: true,
        errorMessage: ERROR_MESSAGE.PASSWORD.INVALID_LENGTH,
      });
      return;
    }
    updateError({ isValid: false });
  };

  return { password, error, updatePassword };
}
