import { useEffect, useState } from 'react';

interface UseCardArrayValidateProps {
  initValue: string[];
  validateOnChange: (value: string) => ValidateResult;
  validateOnBlur: () => ValidateResult;
}

interface ValidateResult {
  isValid: boolean;
  errorMessage: string;
}

const useCardArrayValidate = ({
  initValue,
  validateOnChange,
  validateOnBlur,
}: UseCardArrayValidateProps) => {
  const [value, setValue] = useState(initValue);
  const [errorMessage, setErrorMessage] = useState('');
  const [hasFocus, setHasFocus] = useState(
    Array.from({ length: initValue.length }).fill(false),
  );
  const hasAnyFocus = hasFocus.some((focus) => focus);

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const targetValue = e.target.value;

    const { isValid, errorMessage } = validateOnChange(targetValue);
    if (!isValid) {
      setErrorMessage(errorMessage);
      return;
    }
    setErrorMessage('');
    const newValue = [...value];
    newValue[index] = targetValue;
    setValue(newValue);
  };

  const onFocusHandler = (index: number) => {
    const newFocus = [...hasFocus];
    newFocus[index] = true;

    setHasFocus(newFocus);
    setErrorMessage('');
  };

  const onBlurHandler = (index: number) => {
    const newFocus = [...hasFocus];
    newFocus[index] = false;

    setHasFocus(newFocus);
  };

  useEffect(() => {
    if (!hasAnyFocus) {
      const { isValid, errorMessage } = validateOnBlur();
      if (!isValid) {
        setErrorMessage(errorMessage);
        return;
      }
    }
  }, [hasAnyFocus]);

  return {
    value,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};
export default useCardArrayValidate;
