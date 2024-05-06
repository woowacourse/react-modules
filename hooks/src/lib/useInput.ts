import { useState } from 'react';
import { ValidationResult, ValidatorProps } from './types';
import useValidationResult from './useValidationResult';
import { ValidationType } from './useInputs';

const useInput = (initialValue: string, validator: ValidatorProps) => {
  const [value, setValue] = useState(initialValue);
  const [validationResult, handleValidationResult] = useValidationResult();

  const VALIDATION_FUNCTION: Record<ValidationType, (value: string) => ValidationResult> = {
    inputType: validator.validateInputType,
    fieldRules: validator.validateFieldRules,
  };

  const isValidValue = (value: string, validationType: ValidationType) => {
    const validationResult = VALIDATION_FUNCTION[validationType](value);
    handleValidationResult(validationResult);
    return validationResult.isValid;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isValidValue(event.target.value, 'inputType')) return;
    setValue(event.target.value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    isValidValue(event.target.value, 'fieldRules');
  };

  const focusNextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.nextElementSibling;
    if (target instanceof HTMLInputElement) target.focus();
  };

  const focusNextInputWhenMaxLength = (
    event: React.ChangeEvent<HTMLInputElement>,
    isAutoFocus: boolean,
  ) => {
    if (!isValidValue(event.target.value, 'fieldRules')) return;
    if (isAutoFocus) focusNextInput(event);
  };

  return {
    value,
    setValue,
    isValidValue,
    handleChange,
    handleBlur,
    validationResult,
    handleValidationResult,
    focusNextInputWhenMaxLength,
  };
};

export default useInput;
