import { useState } from 'react';

export interface UseInputValidateProps {
  initValue: string;
  validateOnChange: (value: string) => ValidateResult;
  validateOnBlur: (value: string) => ValidateResult;
  formatValue?: (value: string) => string;
}

export interface ValidateResult {
  isValid: boolean;
  errorMessage: string;
}

const useInputValidate = ({
  initValue,
  validateOnChange,
  validateOnBlur,
  formatValue,
}: UseInputValidateProps) => {
  const [value, setValue] = useState(initValue);
  const [isCompleted, setIsCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const { isValid, errorMessage } = validateOnChange(newValue);

    setIsCompleted(false);

    if (!isValid) {
      setErrorMessage(errorMessage);

      return;
    }
    setErrorMessage('');
    const formattedValue = formatValue ? formatValue(newValue) : newValue;
    setValue(formattedValue);
  };

  const onFocusHandler = () => {
    setErrorMessage('');
  };

  const onBlurHandler = () => {
    setErrorMessage('');

    const { isValid, errorMessage } = validateOnBlur(value);
    setIsCompleted(isValid);

    if (!isValid) {
      setErrorMessage(errorMessage);
      return;
    }
  };

  return {
    value,
    isCompleted,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};
export default useInputValidate;
