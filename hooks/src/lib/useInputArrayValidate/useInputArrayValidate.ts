import { useEffect, useState } from 'react';

export interface UseInputArrayValidate {
  initValue: string[];
  validateOnChange: (value: string, index: number) => ValidateResult;
  validateOnBlur: () => ValidateResult;
}

export interface ValidateResult {
  isValid: boolean;
  errorMessage: string;
}

const useInputArrayValidate = ({
  initValue,
  validateOnChange,
  validateOnBlur,
}: UseInputArrayValidate) => {
  const [value, setValue] = useState(initValue);
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
    if (value.join('').length === 0) return;

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
    value,
    isCompleted,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};
export default useInputArrayValidate;
