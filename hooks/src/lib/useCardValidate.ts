import { useState } from 'react';

interface UseCardValidateProps {
  initValue: string;
  validateOnChange: (value: string) => ValidateResult;
  validateOnBlur: () => ValidateResult;
}

interface ValidateResult {
  isValid: boolean;
  errorMessage: string;
}

const useCardValidate = ({
  initValue,
  validateOnChange,
  validateOnBlur,
}: UseCardValidateProps) => {
  const [value, setValue] = useState(initValue);
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const { isValid, errorMessage } = validateOnChange(newValue);
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
    if (!isValid) {
      setErrorMessage(errorMessage);
      return;
    }
  };

  return {
    value,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};
export default useCardValidate;
