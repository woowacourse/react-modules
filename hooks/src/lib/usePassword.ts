import { ChangeEvent, FocusEvent } from 'react';
import useInput from '@/lib/useInput';
import { validateLengthOver, validateNumber } from '@/validate/validate';
import { PasswordError } from '@/types/password';
import { PASSWORD_ERROR_MESSAGES } from '@/constants/error';
import { PASSWORD_LENGTH } from '@/constants/length';

const passwordValidates = (value: string) => {
  validateNumber(value);
  validateLengthOver(value, PASSWORD_LENGTH);
};

const usePassword = (initialValue: string) => {
  const validLength = PASSWORD_LENGTH;
  const { value, onChange, onBlurValidLength, errorStatus } =
    useInput<PasswordError>(initialValue, passwordValidates, validLength);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    onBlurValidLength(e);
  };

  return {
    value,
    onChange: handleChange,
    onBlur: handleBlur,
    errorMessage: errorStatus && PASSWORD_ERROR_MESSAGES[errorStatus],
  };
};

export default usePassword;
