import { useState } from 'react';
import { ValidationResult } from './type';

const makeInitialErrorInfo = (initialValue: Record<string, string>) => {
  const keys = Object.keys(initialValue);
  const obj: Record<string, ValidationResult> = {};

  keys.forEach(key => {
    obj[key] = {
      isValid: true,
      errorMessage: '',
    };
  });

  return obj;
};

const useValidations = (initialValue: Record<string, string>) => {
  const [errorInfo, setErrorInfo] = useState<Record<string, ValidationResult>>(() =>
    makeInitialErrorInfo(initialValue),
  );

  const updateValidationResult = (validationResult: ValidationResult, name: string) => {
    setErrorInfo(prev => ({
      ...prev,
      [name]: validationResult,
    }));
  };

  const checkValidInputs = (
    targetValue: string,
    name: string,
    validate: (value: string) => ValidationResult,
  ) => {
    const validationResult = validate(targetValue);
    updateValidationResult(validationResult, name);
    return validationResult.isValid;
  };

  return {
    errorInfo,
    updateValidationResult,
    checkValidInputs,
  };
};

export default useValidations;
