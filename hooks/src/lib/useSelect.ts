import { useState } from 'react';
import { ValidatorSelectProps } from './types';
import useValidationResult from './useValidationResult';

const useSelect = (initialValue: string, validator: ValidatorSelectProps, options: string[]) => {
  const { validateInputType, validateFieldRules } = validator;
  const [value, setValue] = useState(initialValue);
  const [validationResult, handleValidationResult] = useValidationResult();

  const isValidValue = (value: string) => {
    const validationResult = validateInputType(value) && validateFieldRules(value, options);
    handleValidationResult(validationResult);
    return validationResult.isValid;
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!isValidValue(event.target.value)) return;
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    handleChange,
    validationResult,
    handleValidationResult,
  };
};

export default useSelect;
