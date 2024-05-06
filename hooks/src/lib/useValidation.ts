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

  const checkValidInput = (targetValue: string, validate: (value: string) => ValidationResult) => {
    const validationResult = validate(targetValue);
    updateValidationResult(validationResult);
    return validationResult.isValid;
  };

  return {
    errorInfo,
    updateValidationResult,
    checkValidInput,
  };
};

export default useValidation;
