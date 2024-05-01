import useInput from './useInput';
import { CardHolderErrorType } from '../types/cardHolder';
import { checkDoubleBlank, validateUpperCase } from '../validate/validate';
import { ChangeEvent } from 'react';
import { CardHolderErrorMessages } from '../constants/error';

export const cardHolderValidates = (value: string) => {
  validateUpperCase(value);
  checkDoubleBlank(value);
};

const useCardHolder = (initialValue: string) => {
  const { value, onChange, errorStatus } = useInput<CardHolderErrorType>(
    initialValue,
    cardHolderValidates
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return {
    value,
    onChange: handleChange,
    errorStatus: errorStatus && CardHolderErrorMessages[errorStatus],
  };
};

export default useCardHolder;
