import { useState } from 'react';
import { UseCard, ValidationResult, ValidatorProps } from './type';

interface UseInputReturn extends UseCard {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setErrorInfo: React.Dispatch<React.SetStateAction<ValidationResult>>;
}

const useInput = (initialValue: string, validator: ValidatorProps): UseInputReturn => {
  const [value, setValue] = useState(initialValue);
  const [errorInfo, setErrorInfo] = useState<ValidationResult>({
    isValid: true,
    errorMessage: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = validator.onChange(event.target.value);
    setErrorInfo(validationResult);
    if (!validationResult.isValid) return;
    setValue(event.target.value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    setErrorInfo(validator.onBlur(event.target.value));
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

export default useInput;
