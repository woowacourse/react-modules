import { useState } from 'react';

interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

interface ValidatorProps<T> {
  onChange: (value: T) => ValidationResult;
}

const useSelect = <T>(initialValue: T, validator: ValidatorProps<T>) => {
  const [value, setValue] = useState<T>(initialValue);
  const [errorInfo, setErrorInfo] = useState<ValidationResult>({
    isValid: true,
    errorMessage: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const validationResult = validator.onChange(event.target.value as T);
    setErrorInfo(validationResult);
    if (!validationResult.isValid) return;
    setValue(event.target.value as T);
  };

  return {
    value,
    handleChange,
    errorInfo,
  };
};

export default useSelect;
