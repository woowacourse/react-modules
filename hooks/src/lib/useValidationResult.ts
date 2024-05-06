import { useState } from 'react';
import { ValidationResult } from './types';

const useValidationResult = () => {
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errorMessage: '',
  });

  const handleValidationResult = (validationResult: ValidationResult) => {
    setValidationResult(validationResult);
  };

  return [validationResult, handleValidationResult] as const;
};

export default useValidationResult;
