import { useState } from 'react';

interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

interface ValidatorProps {
  onChange: (value: string) => ValidationResult;
  onBlur: (value: string) => ValidationResult;
}

interface InputName {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

const useInputs = (initialValue: Record<keyof InputName, string>, validator: ValidatorProps) => {
  const [value, setValue] = useState(initialValue);
  const [errorInfo, setErrorInfo] = useState<Record<keyof InputName, ValidationResult>>({
    first: {
      isValid: true,
      errorMessage: '',
    },
    second: {
      isValid: true,
      errorMessage: '',
    },
    third: {
      isValid: true,
      errorMessage: '',
    },
    fourth: {
      isValid: true,
      errorMessage: '',
    },
  });

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
