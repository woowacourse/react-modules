import { useState } from 'react';
import { validateFilledValue } from './utils/validators';
import { ErrorMessage, UseCardModuleProps } from './types';
import useCardValidation from './useCardValidation';

interface CardIssuerValidationErrorMessages {
  empty: string;
  issuer: string;
}

/**
 * @property {string[]} issuers : 카드 발급사 이름 배열
 */
interface CardIssuerValidations {
  issuers: string[];
}

type UseCardIssuerProps = UseCardModuleProps<CardIssuerValidationErrorMessages, CardIssuerValidations>;

export default function useCardIssuer({ validationErrorMessages, validations: { issuers } }: UseCardIssuerProps) {
  const [cardIssuer, setCardIssuer] = useState('');
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(null);

  const validateCorrectIssuer = (value: string) => !!issuers.find((i) => i === value);

  const totalValidators = [
    { test: validateFilledValue, errorMessage: validationErrorMessages.empty },
    { test: validateCorrectIssuer, errorMessage: validationErrorMessages.issuer },
  ];

  const { handleUpdateValue } = useCardValidation<string>({
    blurEventValidators: undefined,
    changeEventValidators: undefined,
    totalValidators,
    setValue: setCardIssuer,
    setErrorMessage,
  });

  return { cardIssuer, isValid: !!errorMessage, errorMessage, updateValue: handleUpdateValue };
}
