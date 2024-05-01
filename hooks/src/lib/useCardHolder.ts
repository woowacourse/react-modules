import { ChangeEvent, useState, FocusEvent } from 'react';
import useValidation from './useValidation';

interface ValidationErrors {
  empty: string;
  alphabet: string;
}

interface UserCardHolderProps {
  validationErrors: ValidationErrors;
}

export default function useCardHolder(props: UserCardHolderProps) {
  const [cardHolder, setCardHolder] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateFilledCardHolder = (value: string) => {
    return !!value;
  };

  const validateAlphabeticString = (value: string) => {
    const isAlphabet = /[a-zA-Z\s]+$/;
    return !value || isAlphabet.test(value);
  };

  const changeEventValidators = [{ test: validateAlphabeticString, errorMessage: props.validationErrors.alphabet }];
  const blurEventValidators = [{ test: validateFilledCardHolder, errorMessage: props.validationErrors.empty }];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const result = useValidation<string>({ validators: changeEventValidators, value: e.target.value });

    setCardHolder(e.target.value);
    setErrorMessage(result.isValid ? null : result.errorMessage);
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const result = useValidation<string>({ validators: blurEventValidators, value: e.target.value });

    setCardHolder(e.target.value);
    setErrorMessage(result.isValid ? null : result.errorMessage);
  };

  const updateValue = (value: string) => {
    const validators = [...changeEventValidators, ...blurEventValidators];
    const result = useValidation<string>({ validators, value: value });

    setCardHolder(value);
    setErrorMessage(result.errorMessage);
  };

  return { cardHolder, setCardHolder, isValid: !!errorMessage, errorMessage, handleChange, handleBlur, updateValue };
}
