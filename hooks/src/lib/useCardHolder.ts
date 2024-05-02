import { ChangeEvent, useState, FocusEvent } from 'react';
import { ALPHABET_REGEXP } from './contexts';
import { validateFilledValue } from './utils/validators';
import { ErrorMessage, UseCardModuleProps } from './types';
import useCardValidation from './useCardValidation';

interface CardHolderValidationErrors {
  empty: string;
  alphabet: string;
}

export default function useCardHolder(props: UseCardModuleProps<CardHolderValidationErrors>) {
  const [cardHolder, setCardHolder] = useState('');
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(null);

  const validateAlphabeticString = (value: string) => {
    return !value || ALPHABET_REGEXP.test(value);
  };

  const changeEventValidators = [{ test: validateAlphabeticString, errorMessage: props.validationErrors.alphabet }];
  const blurEventValidators = [{ test: validateFilledValue, errorMessage: props.validationErrors.empty }];
  const totalValidators = [blurEventValidators[0], ...changeEventValidators, blurEventValidators[1]];

  const { handleValidationChange, handleValidationBlur, handleUpdateValue } = useCardValidation<string>({
    blurEventValidators,
    changeEventValidators,
    totalValidators,
    setValue: setCardHolder,
    setErrorMessage,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleValidationChange(e.target.value);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    handleValidationBlur(e.target.value);
  };

  return {
    cardHolder,
    setCardHolder,
    isValid: !!errorMessage,
    errorMessage,
    handleChange,
    handleBlur,
    updateValue: handleUpdateValue,
  };
}
