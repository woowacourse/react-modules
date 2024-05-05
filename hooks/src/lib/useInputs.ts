import { useState } from 'react';
import { UseInputs, ValidationResult, ValidatorProps } from './type';

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

const useInputs = (initialValue: Record<string, string>, validator: ValidatorProps): UseInputs => {
  const [value, setValue] = useState(initialValue);
  const [errorInfo, setErrorInfo] = useState<Record<string, ValidationResult>>(() =>
    makeInitialErrorInfo(initialValue),
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const validationResult = validator.onChange(event.target.value);
    setErrorInfo(prev => ({
      ...prev,
      [name]: validationResult,
    }));

    if (!validationResult.isValid) return;
    setValue(prev => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>, name: string) => {
    const validationResult = validator.onBlur(event.target.value);
    setErrorInfo(prev => ({
      ...prev,
      [name]: validationResult,
    }));
    if (!validationResult.isValid) return;
    setValue(prev => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  return {
    value,
    setValue,
    handleChange,
    handleBlur,
    errorInfo,
    setErrorInfo,
  };
};

export default useInputs;
