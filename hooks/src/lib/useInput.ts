import { useState } from 'react';
import { ValidationResult, ValidatorProps } from './types';

const useInput = (initialValue: string, validator: ValidatorProps) => {
  const { validateInputType, validateFieldRules } = validator;
  const [value, setValue] = useState(initialValue);
  const [errorInfo, setErrorInfo] = useState<ValidationResult>({
    isValid: true,
    errorMessage: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = validateInputType(event.target.value);
    setErrorInfo(validationResult);
    if (!validationResult.isValid) return;
    setValue(event.target.value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    setErrorInfo(validateFieldRules(event.target.value));
  };

  return {
    value,
    setValue,
    handleChange,
    handleBlur,
    errorInfo,
    setErrorInfo,
  };
};

export default useInput;
