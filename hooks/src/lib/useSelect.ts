import { useState } from 'react';
import { UseSelect, ValidationResult } from './type';

interface ValidatorProps {
  onChange: (value: string, options: string[]) => ValidationResult;
}

const useSelect = (
  initialValue: string,
  validator: ValidatorProps,
  options: string[],
): UseSelect => {
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
