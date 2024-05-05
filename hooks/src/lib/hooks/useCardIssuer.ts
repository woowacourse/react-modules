import { useEffect, useState } from 'react';

import { ErrorMessage, UseCardModuleReturn } from '../types';
import { isValid, validateFilledValue } from '../utils/validators';

interface CardIssuerValidationErrorMessages {
  empty: string;
  issuer: string;
}

export interface UseCardIssuerProps {
  issuerValue: string;
  validation: {
    issuers: string[];
  };
  errorMessages: CardIssuerValidationErrorMessages;
}
export interface UseCardIssuerResult {
  isFilledValue: boolean;
  isValidIssuer: boolean;
}
export type UseCardIssuerReturn = UseCardModuleReturn<ErrorMessage, UseCardIssuerResult>;

export default function useCardIssuer(props: UseCardIssuerProps): UseCardIssuerReturn {
  const { issuerValue, errorMessages, validation } = props;

  type ErrorMessageKey = keyof typeof errorMessages;
  type Error = ErrorMessageKey[] | null;

  const [error, setError] = useState<Error>(null);

  const validateCorrectIssuer = (value: string) => validation.issuers.includes(value);

  const validateIssuer = (value: string) => {
    const newError: ErrorMessageKey[] = [];

    if (!validateFilledValue(value)) newError.push('empty');
    if (!validateCorrectIssuer(value)) newError.push('issuer');

    setError(newError[0] ? newError : null);
  };

  useEffect(() => {
    validateIssuer(issuerValue);
  }, [issuerValue]);

  return {
    validationErrorMessage: error ? errorMessages[error[0]] : null,
    validationResult: {
      isFilledValue: isValid<ErrorMessageKey>('empty', error),
      isValidIssuer: isValid<ErrorMessageKey>('issuer', error),
    },
  };
}
