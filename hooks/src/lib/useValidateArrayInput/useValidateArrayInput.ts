import { useEffect, useState } from 'react';

export interface UseCardArrayValidateProps {
  initValue: string[];
  validateOnChange: (value: string, index: number) => ValidateResult;
  validateOnBlur: () => ValidateResult;
}

export interface ValidateResult {
  isValid: boolean;
  errorMessage: string;
}

const useCardArrayValidate = ({
  initValue,
  validateOnChange,
  validateOnBlur,
}: UseCardArrayValidateProps) => {
  const [values, setValues] = useState(initValue);
  const [isCompleted, setIsCompleted] = useState(false);
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

    const { isValid, errorMessage } = validateOnChange(targetValue, index);

    setIsCompleted(false);

    if (!isValid) {
      setErrorMessage(errorMessage);
      return;
    }
    setErrorMessage('');
    const newValue = [...values];
    newValue[index] = targetValue;
    setValues(newValue);
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
    if (values.join('').length === 0) return;

    if (!hasAnyFocus) {
      const { isValid, errorMessage } = validateOnBlur();

      setIsCompleted(isValid);

      if (!isValid) {
        setErrorMessage(errorMessage);
        return;
      }
    }
  }, [hasAnyFocus]);

  return {
    values,
    isCompleted,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};
export default useCardArrayValidate;
