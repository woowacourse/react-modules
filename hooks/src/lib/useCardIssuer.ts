import { useState } from 'react';
import useValidation from './useValidation';

interface ValidationErrors {
  empty: string;
}

interface UserCardIssuerProps {
  validationErrors: ValidationErrors;
}

export default function useCardIssuer(props: UserCardIssuerProps) {
  const [cardIssuer, setCardIssuer] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateFilledCardIssuer = (value: string) => {
    return !!value;
  };

  const blurEventValidators = [{ test: validateFilledCardIssuer, errorMessage: props.validationErrors.empty }];

  const updateValue = (option: string) => {
    const result = useValidation<string>({ validators: blurEventValidators, value: option });

    setCardIssuer(option);
    setErrorMessage(result.isValid ? null : result.errorMessage);
  };

  return { cardIssuer, isValid: !!errorMessage, errorMessage, updateValue };
}
