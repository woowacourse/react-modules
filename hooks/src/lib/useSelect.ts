import { useState } from 'react';

export interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

interface ValidatorProps {
  onChange: (value: string, options: string[]) => ValidationResult;
}

const useSelect = (initialValue: string, validator: ValidatorProps, options: string[]) => {
  const [value, setValue] = useState(initialValue);
  const [errorInfo, setErrorInfo] = useState<ValidationResult>({
    isValid: true,
    errorMessage: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const validationResult = validator.onChange(event.target.value, options);
    setErrorInfo(validationResult);
    if (!validationResult.isValid) return;
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    handleChange,
    errorInfo,
    setErrorInfo,
  };
};

export default useSelect;
