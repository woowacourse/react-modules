import { ChangeEvent } from 'react';
import useInput from '@/lib/useInput';
import { CardHolderError } from '@/types/cardHolder';
import { checkDoubleBlank, validateUpperCase } from '@/validate/validate';
import { CardHolderErrorMessages } from '@/constants/error';

export const cardHolderValidates = (value: string) => {
  validateUpperCase(value);
  checkDoubleBlank(value);
};

const useCardHolder = (initialValue: string) => {
  const { value, onChange, errorStatus } = useInput<CardHolderError>(
    initialValue,
    cardHolderValidates
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return {
    value,
    onChange: handleChange,
    errorMessage: errorStatus && CardHolderErrorMessages[errorStatus],
  };
};

export default useCardHolder;
