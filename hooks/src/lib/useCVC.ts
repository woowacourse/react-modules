import { ChangeEvent, FocusEvent } from 'react';
import useInput from '@/lib/useInput';
import { validateLengthOver, validateNumber } from '@/validate/validate';
import { cvcError } from '@/types/cvc';
import { CVCErrorMessages } from '@/constants/error';

const cvcValidates = (value: string) => {
  validateNumber(value);
  validateLengthOver(value, 3);
};

const useCVC = (initialValue: string) => {
  const validLength = 3;
  const { value, onChange, onBlurValidLength, errorStatus } =
    useInput<cvcError>(initialValue, cvcValidates, validLength);

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
