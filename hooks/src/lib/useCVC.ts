import { useEffect } from 'react';
import useInput from './useInput';

const onChange = (value: string) => {
  const isNumber = !Number.isNaN(Number(value));

  if (!isNumber) {
    return { isValid: false, errorMessage: '숫자를 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const onBlur = (value: string) => {
  const isValidLength = value.length === 0 || value.length === 3 || value.length === 4;

  if (!isValidLength) {
    return { isValid: false, errorMessage: 'cvc는 3자리 또는 4자리로 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const useCVC = (initialValue: string) => {
  const { value, setValue, handleChange, handleBlur, errorInfo } = useInput(initialValue, {
    onChange,
    onBlur,
  });

  useEffect(() => {
    if (!onChange(initialValue).isValid || !onBlur(initialValue).isValid) {
      console.error(
        `cvc field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
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

export default useCVC;
