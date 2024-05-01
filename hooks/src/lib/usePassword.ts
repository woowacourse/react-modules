import { ChangeEvent, FocusEvent, useState } from 'react';
import useValidation from './useValidation';

interface ValidationErrors {
  empty: string;
  number: string;
  length: string;
}

interface UserCardPasswordProps {
  validationErrors: ValidationErrors;
}

export default function usePassword(props: UserCardPasswordProps) {
  const { empty, number, length } = props.validationErrors;
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateFilledValue = (value: string) => {
    return !!value;
  };

  const validateNumber = (value: string) => {
    return Number.isInteger(Number(value));
  };

  const validatePasswordLength = (value: string) => {
    return value.length === 2;
  };

  const changeEventValidators = [{ test: validateNumber, errorMessage: number }];
  const blurEventValidators = [
    { test: validateFilledValue, errorMessage: empty },
    { test: validatePasswordLength, errorMessage: length },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const result = useValidation<string>({ validators: changeEventValidators, value: e.target.value });

    setPassword(e.target.value);
    setErrorMessage(result.isValid ? null : result.errorMessage);
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const result = useValidation<string>({ validators: blurEventValidators, value: e.target.value });

    setPassword(e.target.value);
    setErrorMessage(result.isValid ? null : result.errorMessage);
  };

  const updateValue = (value: string) => {
    const validators = [...changeEventValidators, ...blurEventValidators];
    const result = useValidation<string>({ validators, value: value });

    setPassword(value);
    setErrorMessage(result.isValid ? null : result.errorMessage);
  };

  return { password, updateValue, isValid: !!errorMessage, handleChange, handleBlur, errorMessage };
}
