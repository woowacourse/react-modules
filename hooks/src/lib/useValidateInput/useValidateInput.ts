import { useState } from 'react';

export interface UseCardValidateProps {
  initValue: string;
  validateOnChange: (value: string) => ValidateResult;
  validateOnBlur: () => ValidateResult;
  decorator?: (value: string) => string;
}

export interface ValidateResult {
  isValid: boolean;
  errorMessage: string;
}

const useValidateInput = ({
  initValue,
  validateOnChange,
  validateOnBlur,
  decorator = (value: string) => value,
}: UseCardValidateProps) => {
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
    setValue(decorator(newValue));
  };

  const onFocusHandler = () => {
    setErrorMessage('');
  };

  const onBlurHandler = () => {
    const { isValid, errorMessage } = validateOnBlur();

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
export default useValidateInput;
