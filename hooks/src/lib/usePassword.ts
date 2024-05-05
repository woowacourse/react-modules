import { useEffect } from 'react';
import useInput from './useInput';
import { validateNumber, validatePasswordFormat } from './validator';
import { UseCard } from './types';

const usePassword = (initialValue: string): UseCard => {
  const { value, setValue, handleChange, handleBlur, errorInfo } = useInput(initialValue, {
    onChange: validateNumber,
    onBlur: validatePasswordFormat,
  });

  useEffect(() => {
    if (!validateNumber(initialValue).isValid || !validatePasswordFormat(initialValue).isValid) {
      console.error(
        `password field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
      );
      setValue('');
    }
  }, [initialValue, setValue]);

  return {
    value,
    handleChange,
    handleBlur,
    errorInfo,
  };
};

export default usePassword;
