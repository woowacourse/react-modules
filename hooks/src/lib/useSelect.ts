import { useState } from 'react';
import { ValidationResult, ValidatorSelectProps } from './types';

const useSelect = (initialValue: string, validator: ValidatorSelectProps, options: string[]) => {
  const { validateInputType, validateFieldRules } = validator;
  const [value, setValue] = useState(initialValue);
  const [errorInfo, setErrorInfo] = useState<ValidationResult>({
    isValid: true,
    errorMessage: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const validationResult =
      validateInputType(event.target.value) && validateFieldRules(event.target.value, options);
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
