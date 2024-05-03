import { ChangeEvent, FocusEvent } from 'react';
import useInput from './useInput';
import { validateLengthOver, validateNumber } from '../validate/validate';
import { CVCError } from '../types/cvc';
import { CVCErrorMessages } from '../constants/error';
import { CVC_LENGTH } from '../constants/length';

const cvcValidates = (value: string) => {
  validateNumber(value);
  validateLengthOver(value, CVC_LENGTH);
};

const useCVC = (initialValue: string) => {
  const validLength = CVC_LENGTH;
  const { value, onChange, onBlurValidLength, errorStatus } =
    useInput<CVCError>(initialValue, cvcValidates, validLength);

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
