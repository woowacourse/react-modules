import { useState } from 'react';
import { validateFilledValue } from './utils/validators';
import { ErrorMessage, UseCardModuleProps } from './types';
import useCardValidation from './useCardValidation';

interface CardIssuerValidationErrors {
  empty: string;
}

export default function useCardIssuer(props: UseCardModuleProps<CardIssuerValidationErrors>) {
  const [cardIssuer, setCardIssuer] = useState('');
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(null);

  const totalValidators = [{ test: validateFilledValue, errorMessage: props.validationErrors.empty }];

  const { handleUpdateValue } = useCardValidation<string>({
    blurEventValidators: undefined,
    changeEventValidators: undefined,
    totalValidators,
    setValue: setCardIssuer,
    setErrorMessage,
  });

  return { cardIssuer, isValid: !!errorMessage, errorMessage, updateValue: handleUpdateValue };
}
