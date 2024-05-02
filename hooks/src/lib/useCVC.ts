import { ChangeEvent, useState, FocusEvent } from 'react';
import { VALID_LENGTH } from './contexts';
import { validateNumber, validateFilledValue, validateLength } from './utils/validators';
import { ErrorMessage, UseCardModuleProps } from './types';
import useCardValidation from './useCardValidation';
interface ValidationErrors {
  empty: string;
  number: string;
  length: string;
}

export default function useCVC(props: UseCardModuleProps<ValidationErrors>) {
  const { empty, number, length } = props.validationErrors;
  const [cvc, setCVC] = useState('');
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(null);

  const validateCVCLength = (value: string) => validateLength(value, VALID_LENGTH.cvc);

  const changeEventValidators = [{ test: validateNumber, errorMessage: number }];
  const blurEventValidators = [
    { test: validateFilledValue, errorMessage: empty },
    { test: validateCVCLength, errorMessage: length },
  ];
  const totalValidators = [blurEventValidators[0], ...changeEventValidators, blurEventValidators[1]];

  const { handleValidationChange, handleValidationBlur, handleUpdateValue } = useCardValidation<string>({
    blurEventValidators,
    changeEventValidators,
    totalValidators,
    setValue: setCVC,
    setErrorMessage,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleValidationChange(e.target.value);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    handleValidationBlur(e.target.value);
  };

  return {
    cvc,
    setCVC,
    isValid: !!errorMessage,
    errorMessage,
    handleChange,
    handleBlur,
    updateValue: handleUpdateValue,
  };
}
