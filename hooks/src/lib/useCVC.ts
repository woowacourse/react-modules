import { ChangeEvent, useState, FocusEvent } from 'react';
import useValidation from './useValidation';

interface ValidationErrors {
  empty: string;
  number: string;
  length: string;
}

interface UserCardCVCrProps {
  validationErrors: ValidationErrors;
}

export default function useCVC(props: UserCardCVCrProps) {
  const { empty, number, length } = props.validationErrors;
  const [cvc, setCVC] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateFilledValue = (value: string) => {
    return !!value;
  };

  const validateNumber = (value: string) => {
    return Number.isInteger(Number(value));
  };

  const validateCVCLength = (value: string) => {
    return value.length === 3;
  };
  const changeEventValidators = [{ test: validateNumber, errorMessage: number }];
  const blurEventValidators = [
    { test: validateFilledValue, errorMessage: empty },
    { test: validateCVCLength, errorMessage: length },
  ];

  const validators = [blurEventValidators[0], ...changeEventValidators, blurEventValidators[1]];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const result = useValidation<string>({ validators: changeEventValidators, value: e.target.value });

    setCVC(e.target.value);
    setErrorMessage(result.isValid ? null : errorMessage);
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const result = useValidation<string>({ validators: blurEventValidators, value: e.target.value });

    setCVC(e.target.value);
    setErrorMessage(result.isValid ? null : errorMessage);
  };

  const updateValue = (value: string) => {
    const result = useValidation<string>({ validators, value: value });

    setCVC(value);
    setErrorMessage(result.isValid ? null : result.errorMessage);
  };

  return { cvc, updateValue, isValid: !!errorMessage, handleChange, handleBlur, errorMessage };
}
