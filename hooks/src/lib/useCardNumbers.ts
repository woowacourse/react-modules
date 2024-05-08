import { ChangeEventHandler } from 'react';
import { useCardBrand, useSingleInput } from '.';
import { CARD_BRAND, VALID_LENGTH } from './constants';
import { Validations, Validator, Validators } from './types';
import { validateFilledValue, validateLength, validateNumber } from './utils/validators';

interface ValidationErrors {
  empty: string;
  number: string;
  length: string;
}

interface UseCardNumbersProps {
  initialValue: string;
  validations: Validations;
}

const validators: Validators<keyof ValidationErrors> = {
  empty: validateFilledValue,
  number: validateNumber,
  length: (value: string) => validateLength(value, VALID_LENGTH.cardNumber),
};

export default function useCardNumbers({ initialValue, validations }: UseCardNumbersProps) {
  const onChangeValidators: Validator[] = Object.entries(validations.onChange || {}).map(([key, errorMessage]) => ({
    test: validators[key as keyof ValidationErrors],
    errorMessage,
  }));

  const onBlurValidators: Validator[] = Object.entries(validations.onBlur || {}).map(([key, errorMessage]) => ({
    test: validators[key as keyof ValidationErrors],
    errorMessage,
  }));

  const {
    value: cardNumbers,
    setValue: setCardNumbers,
    isValid,
    errorMessage,
    handleChange,
    handleBlur,
  } = useSingleInput({
    initialValue,
    validations: { onChange: onChangeValidators, onBlur: onBlurValidators },
  });

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    handleChange(value.split(' ').join(''));
  };

  return {
    cardNumbers,
    setCardNumbers,
    isValid,
    errorMessage,
    validators: [...onChangeValidators, ...onBlurValidators],
    onChange,
    onBlur: handleBlur,
  };
}
