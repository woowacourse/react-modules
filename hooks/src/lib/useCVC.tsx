import useInput from './useInput';
import { validateLength, validateNumber } from '../validate/validate';
import { ChangeEvent } from 'react';
import { cvcErrorType } from '../types/cvc';
import { CVCErrorMessages } from '../constants/error';

const cvcValidates = (value: string) => {
  validateNumber(value);
  validateLength(value, 3);
};

const useCVC = (initialValue: string) => {
  const { value, onChange, errorStatus } = useInput<cvcErrorType>(
    initialValue,
    cvcValidates
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return {
    value,
    onChange: handleChange,
    errorMessage: errorStatus && CVCErrorMessages[errorStatus],
  };
};

export default useCVC;
