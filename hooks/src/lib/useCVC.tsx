import useInput from './useInput';
import { validateMaxLength, validateNumber } from '../validate/validate';
import { ChangeEvent, FocusEvent } from 'react';
import { cvcErrorType } from '../types/cvc';
import { CVCErrorMessages } from '../constants/error';

const cvcValidates = (value: string) => {
  validateNumber(value);
  validateMaxLength(value, 3);
};

const useCVC = (initialValue: string) => {
  const validLength = 3;
  const { value, onChange, onBlurValidLength, errorStatus } =
    useInput<cvcErrorType>(initialValue, cvcValidates, validLength);

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
    errorMessage: errorStatus && CVCErrorMessages[errorStatus],
  };
};

export default useCVC;
