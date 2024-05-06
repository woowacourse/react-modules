import { useState } from 'react';
import { ValidationResult, ValidatorProps } from './types';
import useValidationResults from './useValidationResults';

export type ValidationType = 'inputType' | 'fieldRules';

const useInputs = (initialValue: Record<string, string>, validator: ValidatorProps) => {
  const VALIDATION_FUNCTION: Record<ValidationType, (value: string) => ValidationResult> = {
    inputType: validator.validateInputType,
    fieldRules: validator.validateFieldRules,
  };

  const [value, setValue] = useState(initialValue);
  const [validationResult, handleValidationResult] = useValidationResults(initialValue);

  const isValidValue = (value: string, name: string, validationType: ValidationType) => {
    const validationResult = VALIDATION_FUNCTION[validationType](value);
    handleValidationResult(name, validationResult);
    return validationResult.isValid;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    if (!isValidValue(event.target.value, name, 'inputType')) return;

    setValue(prev => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>, name: string) => {
    isValidValue(event.target.value, name, 'fieldRules');
  };

  const focusNextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.nextElementSibling;
    if (target instanceof HTMLInputElement) target.focus();
  };

  const focusNextInputWhenMaxLength = (
    event: React.ChangeEvent<HTMLInputElement>,
    isAutoFocus: boolean,
    name: string,
  ) => {
    if (!isValidValue(event.target.value, name, 'fieldRules')) return;
    if (isAutoFocus) focusNextInput(event);
  };

  const clearInvalidInitialValues = (
    initialValue: Record<string, string>,
    getErrorMessage: (value: string) => void,
  ) => {
    const initialValues = Object.entries(initialValue);
    for (const [key, value] of initialValues) {
      if (
        !validator.validateInputType(value).isValid ||
        !validator.validateFieldRules(value).isValid
      ) {
        console.error(getErrorMessage(value));
        setValue(prev => ({
          ...prev,
          [key]: '',
        }));
      }
    }
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
    clearInvalidInitialValues,
  };
};

export default useInputs;
