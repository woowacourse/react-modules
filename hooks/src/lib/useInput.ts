import { useState } from 'react';

export interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

interface ValidatorProps {
  onChange: (value: string) => ValidationResult;
  onBlur: (value: string) => ValidationResult;
}

const useInput = (initialValue: string, validator: ValidatorProps) => {
  const [value, setValue] = useState(initialValue);
  const [errorInfo, setErrorInfo] = useState<ValidationResult>({
    isValid: true,
    errorMessage: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = validator.onChange(event.target.value);
    setErrorInfo(validationResult);
    if (!validationResult.isValid) return;
    setValue(event.target.value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    setErrorInfo(validator.onBlur(event.target.value));
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
