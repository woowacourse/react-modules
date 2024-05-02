import { VALID_LENGTH } from './contexts';
import { UseCardModuleProps } from './types';
import { validateNumber, validateFilledValue, validateLength } from './utils/validators';

interface CardNumberValidationErrors {
  empty: string;
  number: string;
  length: string;
}

export default function useCardNumber({ validationErrors }: UseCardModuleProps<CardNumberValidationErrors>) {
  const validateCardNumberLength = (value: string) => validateLength(value, VALID_LENGTH.cardNumber);

  const changeEventValidators = [{ test: validateNumber, errorMessage: validationErrors.number }];

  const blurEventValidators = [
    { test: validateFilledValue, errorMessage: validationErrors.empty },
    { test: validateCardNumberLength, errorMessage: validationErrors.length },
  ];

  const totalValidators = [blurEventValidators[0], ...changeEventValidators, blurEventValidators[1]];

  return { changeEventValidators, blurEventValidators, totalValidators };
}
