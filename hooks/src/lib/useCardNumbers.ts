import useInputs from './useInputs';
import { useEffect } from 'react';
import { validateCardNumberFormat, validateNumber } from './validator';

interface Options {
  isAutoFocus?: boolean;
}

const useCardNumbers = (initialValue: Record<string, string>, options?: Options) => {
  const { value, setValue, handleBlur, errorInfo, setErrorInfo } = useInputs(initialValue, {
    onChange: validateNumber,
    onBlur: validateCardNumberFormat,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const validationResult = validateNumber(event.target.value);
    setErrorInfo(prev => ({
      ...prev,
      [name]: validationResult,
    }));
    if (!validationResult.isValid) return;
    setValue(prev => ({
      ...prev,
      [name]: event.target.value,
    }));

    if (event.target.value.length === event.target.maxLength) {
      const validationResult = validateCardNumberFormat(event.target.value);

      setErrorInfo(prev => ({
        ...prev,
        [name]: validationResult,
      }));
      if (!validationResult.isValid) return;
      if (options?.isAutoFocus) {
        const target = event.target.nextElementSibling;
        if (target instanceof HTMLInputElement) target.focus();
      }
    }
  };

  useEffect(() => {
    const initialValues = Object.entries(initialValue);
    for (const [key, value] of initialValues) {
      if (!validateNumber(value).isValid || !validateCardNumberFormat(value).isValid) {
        console.error(
          `cardNumbers field error: ${value} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
        );
        setValue(prev => ({
          ...prev,
          [key]: '',
        }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { value, handleChange, handleBlur, errorInfo };
};

export default useCardNumbers;
