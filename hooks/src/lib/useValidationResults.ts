import { useState } from 'react';
import { ValidationResult } from './types';

const makeInitialValidationResult = (initialValue: Record<string, string>) => {
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

const useValidationResults = (
  initialValue: Record<string, string>,
): [
  validationResult: Record<string, ValidationResult>,
  handleValidationResult: (key: string, validationResult: ValidationResult) => void,
] => {
  const [validationResult, setValidationResult] = useState<Record<string, ValidationResult>>(
    makeInitialValidationResult(initialValue),
  );

  const handleValidationResult = (key: string, validationResult: ValidationResult) => {
    setValidationResult(prev => ({
      ...prev,
      [key]: validationResult,
    }));
  };

  return [validationResult, handleValidationResult];
};

export default useValidationResults;
