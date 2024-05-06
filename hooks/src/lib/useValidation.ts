import { useState } from 'react';
import { ValidationResult } from './type';

const useValidation = () => {
  const [errorInfo, setErrorInfo] = useState<ValidationResult>({
    isValid: true,
    errorMessage: '',
  });

  const updateValidationResult = (validationResult: ValidationResult) => {
    setErrorInfo(validationResult);
  };

  return {
    errorInfo,
    updateValidationResult,
  };
};

export default useValidation;
