import useInput from './useInput';
import { useEffect } from 'react';
import { validateExpiryYearFormat, validateNumber } from './validator';
import { Options, UseCard } from './type';
import useValidation from './useValidation';

const useExpiryYear = (initialValue: string, options?: Options): UseCard => {
  const { value, setValue } = useInput(initialValue);
  const { errorInfo, updateValidationResult } = useValidation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = validateNumber(event.target.value);
    updateValidationResult(validationResult);
    if (!validationResult.isValid) return;
    setValue(event.target.value);

    if (event.target.value.length === event.target.maxLength) {
      const validationResult = validateExpiryYearFormat(event.target.value);
      updateValidationResult(validationResult);
      if (!validationResult.isValid) return;
      if (options?.isAutoFocus) {
        const target = event.target.nextElementSibling;
        if (target instanceof HTMLInputElement) target.focus();
      }
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    const validationResult = validateExpiryYearFormat(event.target.value);
    updateValidationResult(validationResult);
  };

  useEffect(() => {
    if (!validateNumber(initialValue).isValid || !validateExpiryYearFormat(initialValue).isValid) {
      console.error(
        `expiry date field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
      );
      setValue('');
    }
  }, [initialValue, setValue]);

  return { value, handleChange, handleBlur, errorInfo };
};

export default useExpiryYear;
