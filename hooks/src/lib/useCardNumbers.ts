import { VALID_LENGTH } from './contexts';
import { Validations, Validator, Validators } from './types';
import useMultipleInputs from './useMultipleInputs';
import { validateFilledValue, validateLength, validateNumber } from './utils/validators';

interface ValidationErrors {
  empty: string;
  number: string;
  length: string;
}

interface UseCardNumbersProps {
  initialValues: Record<string, string>;
  validations: Validations;
}

const validators: Validators<keyof ValidationErrors> = {
  empty: validateFilledValue,
  number: validateNumber,
  length: (value: string) => validateLength(value, VALID_LENGTH.cardNumber),
};

export default function useCardNumbers<E extends HTMLInputElement>({
  initialValues,
  validations,
}: UseCardNumbersProps) {
  const onChangeValidators: Validator[] = Object.entries(validations.onChange || {}).map(([key, errorMessage]) => ({
    test: validators[key as keyof ValidationErrors],
    errorMessage,
  }));

  const onBlurValidators: Validator[] = Object.entries(validations.onBlur || {}).map(([key, errorMessage]) => ({
    test: validators[key as keyof ValidationErrors],
    errorMessage,
  }));

  const {
    values: cardNumbers,
    setValues: setCardNumbers,
    isValid,
    errorMessage,
    onChange,
    onBlur,
  } = useMultipleInputs<E>({
    initialValues,
    validations: { onChange: onChangeValidators, onBlur: onBlurValidators },
  });

  return {
    cardNumbers,
    setCardNumbers,
    isValid,
    errorMessage,
    validators: [...onChangeValidators, ...onBlurValidators],
    handleChange: onChange,
    handleBlur: onBlur,
  };
}
