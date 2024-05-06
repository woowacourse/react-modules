import { useEffect } from 'react';
import useInput from './useInput';
import { validateCardHolderFormat, validateEnglish } from './validator';
import { UseCard } from './type';
import useValidation from './useValidation';

const useCardHolder = (initialValue: string): UseCard => {
  const { value, setValue } = useInput(initialValue.toUpperCase());
  const { errorInfo, updateValidationResult } = useValidation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = validateEnglish(event.target.value);
    updateValidationResult(validationResult);
    if (!validationResult.isValid) return;
    setValue(event.target.value.toUpperCase());
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    const validationResult = validateCardHolderFormat(event.target.value);
    updateValidationResult(validationResult);
  };

  useEffect(() => {
    if (!validateEnglish(initialValue).isValid || !validateCardHolderFormat(initialValue).isValid) {
      console.error(
        `cardholder field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
      );
      setValue('');
    }
  }, [initialValue, setValue]);

  return { value, handleChange, handleBlur, errorInfo };
};

export default useCardHolder;
