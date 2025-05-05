import { useState } from 'react';
import { INPUT_RULE } from './constants/inputRule';
import { ERROR_MESSAGE } from './constants/errorMessage';
import { isEmpty, isValidLength, isNumber } from './utils/validate';
import { isOverInputLength } from './utils/overInputLength';

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
    if (isOverInputLength(value, INPUT_RULE.PASSWORD.MAX_LENGTH)) return;

    validate(value);

    setPassword(value);
  };

  const validate = (value: string) => {
    if (isEmpty(value)) {
      updateError({ isValid: false });
      return;
    }

    if (!isNumber(value)) {
      updateError({
        isValid: true,
        errorMessage: ERROR_MESSAGE.PASSWORD.NOT_A_NUMBER,
      });
      return;
    }
    if (!isValidLength(value, INPUT_RULE.PASSWORD.MAX_LENGTH)) {
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
