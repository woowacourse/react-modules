import useInputs from './useInputs';
import { useEffect } from 'react';
import { validateCardNumberFormat, validateNumber } from './validator';
import { Options, UseCardNumber } from './type';
import useValidations from './useValidations';

const useCardNumbers = (initialValue: Record<string, string>, options?: Options): UseCardNumber => {
  const { value, setValue } = useInputs(initialValue);
  const { errorInfo, updateValidationResult } = useValidations(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const validationResult = validateNumber(event.target.value);
    updateValidationResult(validationResult, name);
    if (!validationResult.isValid) return;
    setValue(prev => ({
      ...prev,
      [name]: event.target.value,
    }));

    if (event.target.value.length === event.target.maxLength) {
      const validationResult = validateCardNumberFormat(event.target.value);
      updateValidationResult(validationResult, name);
      if (!validationResult.isValid) return;
      if (options?.isAutoFocus) {
        const target = event.target.nextElementSibling;
        if (target instanceof HTMLInputElement) target.focus();
      }
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>, name: string) => {
    const validationResult = validateCardNumberFormat(event.target.value);
    updateValidationResult(validationResult, name);
    if (!validationResult.isValid) return;
    setValue(prev => ({
      ...prev,
      [name]: event.target.value,
    }));
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
