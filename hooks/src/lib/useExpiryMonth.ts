import useInput from './useInput';
import { useEffect } from 'react';
import { validateExpiryMonthFormat, validateNumber } from './validator';

interface Options {
  isAutoFocus?: boolean;
}

const useExpiryMonth = (initialValue: string, options?: Options) => {
  const { value, setValue, handleBlur, errorInfo, setErrorInfo } = useInput(initialValue, {
    onChange: validateNumber,
    onBlur: validateExpiryMonthFormat,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = validateNumber(event.target.value);
    setErrorInfo(validationResult);
    if (!validationResult.isValid) return;
    setValue(event.target.value);

    if (event.target.value.length === event.target.maxLength) {
      const validationResult = validateExpiryMonthFormat(event.target.value);
      setErrorInfo(validationResult);
      if (!validationResult.isValid) return;
      if (options?.isAutoFocus) {
        const target = event.target.nextElementSibling;
        if (target instanceof HTMLInputElement) target.focus();
      }
    }
  };

  useEffect(() => {
    if (!validateNumber(initialValue).isValid || !validateExpiryMonthFormat(initialValue).isValid) {
      console.error(
        `expiry date field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
      );
      setValue('');
    }
  }, [initialValue, setValue]);

  return { value, handleChange, handleBlur, errorInfo };
};

export default useExpiryMonth;
