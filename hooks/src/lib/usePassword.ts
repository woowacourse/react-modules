import { useEffect } from 'react';
import useInput from './useInput';

const validateInputType = (value: string) => {
  const isNumber = !Number.isNaN(Number(value));

  if (!isNumber) {
    return { isValid: false, errorMessage: '숫자를 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const validateFieldRules = (value: string) => {
  const isValidLength = value.length === 0 || value.length === 2;

  if (!isValidLength) {
    return { isValid: false, errorMessage: '비밀번호는 2자리로 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const usePassword = (initialValue: string) => {
  const { value, setValue, handleChange, handleBlur, errorInfo } = useInput(initialValue, {
    validateInputType,
    validateFieldRules,
  });

  useEffect(() => {
    if (!validateInputType(initialValue).isValid || !validateFieldRules(initialValue).isValid) {
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
