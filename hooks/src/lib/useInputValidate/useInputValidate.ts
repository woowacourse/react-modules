import { useState } from 'react';

export interface UseInputValidateProps {
  initValue: string;
  validateOnChange: (value: string) => ValidateResult;
  validateOnBlur: () => ValidateResult;
}

export interface ValidateResult {
  isValid: boolean;
  errorMessage: string;
}

const useInputValidate = ({
  initValue,
  validateOnChange,
  validateOnBlur,
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
    setValue(newValue);
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
export default useInputValidate;
