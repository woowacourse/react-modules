import useInput from './useInput';
import { useEffect } from 'react';

const onChange = (value: string) => {
  const isNumber = !Number.isNaN(Number(value));

  if (!isNumber) {
    return { isValid: false, errorMessage: '숫자를 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const onBlur = (value: string) => {
  const nowYear = Number(new Date().getFullYear().toString().slice(2));
  const isValidLength = value.length === 0 || value.length === 2;
  const isValidYear = Number(value) >= nowYear;

  if (!isValidLength) {
    return { isValid: false, errorMessage: '년은 2자리로 입력해주세요' };
  }

  if (!isValidYear) {
    return { isValid: false, errorMessage: `유효 기간은 ${nowYear}년 이후로 입력해주세요` };
  }

  return { isValid: true, errorMessage: '' };
};

interface Options {
  isAutoFocus?: boolean;
}

const useExpiryYear = (initialValue: string, options?: Options) => {
  const { value, setValue, handleBlur, errorInfo, setErrorInfo } = useInput(initialValue, {
    onChange,
    onBlur,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = onChange(event.target.value);
    setErrorInfo(validationResult);
    if (!validationResult.isValid) return;
    setValue(event.target.value);

    if (event.target.value.length === event.target.maxLength) {
      const validationResult = onBlur(event.target.value);
      setErrorInfo(validationResult);
      if (!validationResult.isValid) return;
      if (options?.isAutoFocus) {
        const target = event.target.nextElementSibling;
        if (target instanceof HTMLInputElement) target.focus();
      }
    }
  };

  useEffect(() => {
    if (!onChange(initialValue).isValid) {
      console.error(
        `expiry date field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
      );
      setValue('');
    }
  }, [initialValue, setValue]);

  return { value, handleChange, handleBlur, errorInfo };
};

export default useExpiryYear;
