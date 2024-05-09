import { useEffect } from 'react';
import { validateCardNumberFormat, validateNumber } from '../validator';
import { Options, UseCardNumber } from '../type';
import useValidations from '../useValidations';
import useCardNumbersState from './useCardNumbersState';

const useCardNumbers = (initialValue: Record<string, string>, options?: Options): UseCardNumber => {
  const { value, updateCardNumbers } = useCardNumbersState(initialValue);
  const { errorInfo, checkValidInputs } = useValidations(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const targetValue = event.target.value;
    if (!checkValidInputs(targetValue, name, validateNumber)) return;
    updateCardNumbers(targetValue, name);

    if (options?.isAutoFocus) {
      autoFocusNextInput(event.target);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>, name: string) => {
    checkValidInputs(event.target.value, name, validateCardNumberFormat);
  };

  const autoFocusNextInput = (element: HTMLElement) => {
    const target = element.nextElementSibling;
    if (target instanceof HTMLInputElement) target.focus();
  };

  useEffect(() => {
    const initialValues = Object.entries(initialValue);
    for (const [key, value] of initialValues) {
      if (!validateNumber(value).isValid || !validateCardNumberFormat(value).isValid) {
        console.error(
          `cardNumbers field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
        );
        updateCardNumbers('', key);
      }
    }
  }, [initialValue, updateCardNumbers]);

  return { value, handleChange, handleBlur, errorInfo };
};

export default useCardNumbers;
