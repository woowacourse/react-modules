import useInput from './useInput';
import { CardHolderType } from '../types/cardHolder';
import { checkDoubleBlank, validateUpperCase } from '../validate/validate';
import { ChangeEvent } from 'react';

export const cardHolderValidates = (value: string) => {
  validateUpperCase(value);
  checkDoubleBlank(value);
};

const useCardHolder = (initialValue: string) => {
  const { value, onChange, errorStatus } = useInput<CardHolderType>(
    initialValue,
    cardHolderValidates
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return { value, onChange: handleChange, errorStatus };
};

export default useCardHolder;
