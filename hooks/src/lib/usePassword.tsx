import useInput from './useInput';
import { validateLength, validateNumber } from '../validate/validate';
import { ChangeEvent } from 'react';
import { PasswordErrorType } from '../types/password';
import { PasswordErrorMessages } from '../constants/error';

const passwordValidates = (value: string) => {
  validateNumber(value);
  validateLength(value, 2);
};

const usePassword = (initialValue: string) => {
  const { value, onChange, errorStatus } = useInput<PasswordErrorType>(
    initialValue,
    passwordValidates
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return {
    value,
    onChange: handleChange,
    errorMessages: errorStatus && PasswordErrorMessages[errorStatus],
  };
};

export default usePassword;
