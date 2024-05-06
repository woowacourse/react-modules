import { useSingleInput } from '.';
import { ALPHABET_REGEXP } from './constants';
import { Validations, Validator, Validators } from './types';
import { validateFilledValue } from './utils/validators';

interface ValidationErrors {
  empty: string;
  alphabet: string;
}

interface UseCardHolderProps {
  initialValue: string;
  validations: Validations;
}

const validators: Validators<keyof ValidationErrors> = {
  empty: validateFilledValue,
  alphabet: (value: string) => {
    return !value || ALPHABET_REGEXP.test(value);
  },
};

export default function useCardHolder<E extends HTMLInputElement>({ initialValue, validations }: UseCardHolderProps) {
  const onChangeValidators: Validator[] = Object.entries(validations.onChange || {}).map(([key, errorMessage]) => ({
    test: validators[key as keyof ValidationErrors],
    errorMessage,
  }));

  const onBlurValidators: Validator[] = Object.entries(validations.onBlur || {}).map(([key, errorMessage]) => ({
    test: validators[key as keyof ValidationErrors],
    errorMessage,
  }));

  const {
    value: cardHolder,
    setValue: setCardHolder,
    isValid,
    errorMessage,
    onChange,
    onBlur,
  } = useSingleInput<E>({
    initialValue,
    validations: { onChange: onChangeValidators, onBlur: onBlurValidators },
  });

  return {
    cardHolder,
    setCardHolder,
    isValid,
    errorMessage,
    validators: [...onChangeValidators, ...onBlurValidators],
    handleChange: onChange,
    handleBlur: onBlur,
  };
}
