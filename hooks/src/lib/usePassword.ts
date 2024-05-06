import { useEffect } from 'react';
import useInput from './useInput';
import { validateNumber, validatePasswordFormat } from './validator';
import { UseCard } from './type';
import useValidation from './useValidation';

const usePassword = (initialValue: string): UseCard => {
  const { value, setValue } = useInput(initialValue);
  const { errorInfo, updateValidationResult } = useValidation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = validateNumber(event.target.value);
    updateValidationResult(validationResult);
    if (!validationResult.isValid) return;
    setValue(event.target.value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    const validationResult = validatePasswordFormat(event.target.value);
    updateValidationResult(validationResult);
  };

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
