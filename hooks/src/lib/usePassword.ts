import { ChangeEvent, FocusEvent, useState } from 'react';

import { validateFilledValue, validateNumber, validateLength } from './utils/validators';
import { ErrorMessage, UseCardModuleProps } from './types';
import useCardValidation from './useCardValidation';

interface ValidationErrors {
  empty: string;
  number: string;
  length: string;
}

export default function usePassword(props: UseCardModuleProps<ValidationErrors>) {
  const { empty, number, length } = props.validationErrorMessages;

  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(null);

  const validatePasswordLength = (value: string) => validateLength(value, 2);

  const changeEventValidators = [{ test: validateNumber, errorMessage: number }];
  const blurEventValidators = [
    { test: validateFilledValue, errorMessage: empty },
    { test: validatePasswordLength, errorMessage: length },
  ];
  const totalValidators = [...changeEventValidators, ...blurEventValidators];

  const { handleValidationChange, handleValidationBlur, handleUpdateValue } = useCardValidation<string>({
    blurEventValidators,
    changeEventValidators,
    totalValidators,
    setValue: setPassword,
    setErrorMessage,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleValidationChange(e.target.value);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    handleValidationBlur(e.target.value);
  };

  return {
    password,
    setPassword,
    isValid: !!errorMessage,
    errorMessage,
    handleChange,
    handleBlur,
    updateValue: handleUpdateValue,
  };
}
