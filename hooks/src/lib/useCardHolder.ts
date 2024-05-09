import { ChangeEvent, FocusEvent } from 'react';
import useInput from '@/lib/useInput';
import { CardHolderError } from '@/types/cardHolder';
import { validateDoubleBlank, validateUpperCase } from '@/validate/validate';
import { CARD_HOLDER_ERROR_MESSAGES } from '@/constants/error';

export const cardHolderValidates = (value: string) => {
  validateUpperCase(value);
  validateDoubleBlank(value);
};

const useCardHolder = (initialValue: string) => {
  const validLength = 2;
  const { value, onChange, onBlurValidLength, errorStatus } =
    useInput<CardHolderError>(initialValue, cardHolderValidates, validLength);

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
    errorMessage: errorStatus && CARD_HOLDER_ERROR_MESSAGES[errorStatus],
  };
};

export default useCardHolder;
