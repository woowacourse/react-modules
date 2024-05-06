import useInput from '../useInput';
import { useEffect } from 'react';
import { validateExpiryMonthFormat, validateNumber } from '../validator';
import { Options, UseCard } from '../type';
import useValidation from '../useValidation';

const useExpiryMonth = (initialValue: string, options?: Options): UseCard => {
  const { value, setValue } = useInput(initialValue);
  const { errorInfo, checkValidInput } = useValidation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    if (!checkValidInput(targetValue, validateNumber)) return;
    setValue(targetValue);

    if (targetValue.length === event.target.maxLength) {
      if (!checkValidInput(targetValue, validateExpiryMonthFormat)) return;
      if (options?.isAutoFocus) {
        autoFocusNextInput(event.target);
      }
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    checkValidInput(event.target.value, validateExpiryMonthFormat);
  };

  const autoFocusNextInput = (element: HTMLElement) => {
    const target = element.nextElementSibling;
    if (target instanceof HTMLInputElement) target.focus();
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
