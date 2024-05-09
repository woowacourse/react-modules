import { useState } from 'react';

export interface UseInputValidateProps {
  value: string;
  updateValue: (value: string) => void;
  validateOnChange: (value: string) => ValidateResult;
  validateOnBlur: (value: string) => ValidateResult;
}

export interface ValidateResult {
  isValid: boolean;
  errorMessage: string;
}

const useInputValidate = ({
  value,
  updateValue,
  validateOnChange,
  validateOnBlur,
}: UseInputValidateProps) => {
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
    updateValue(newValue);
  };

  const onFocusHandler = () => {
    setErrorMessage('');
  };

  const onBlurHandler = () => {
    const { isValid, errorMessage } = validateOnBlur(value);

    setIsCompleted(isValid);

    if (!isValid) {
      setErrorMessage(errorMessage);
      return;
    }
  };

  return {
    isCompleted,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};
export default useInputValidate;
