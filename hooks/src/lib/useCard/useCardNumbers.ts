import { useEffect } from 'react';
import { validateCardNumberFormat, validateNumber } from '../validator';
import { Options, UseCardNumber, ValidationResult } from '../type';
import useValidations from '../useValidations';
import useCardNumbersState from './useCardNumbersState';

const useCardNumbers = (initialValue: Record<string, string>, options?: Options): UseCardNumber => {
  const { value, updateCardNumbers } = useCardNumbersState(initialValue);
  const { errorInfo, updateValidationResult } = useValidations(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    if (!processValidCardNumberInput(e.target.value, name, validateNumber)) return;

    if (e.target.value.length !== e.target.maxLength) return;
    const validationResult = validateCardNumberFormat(e.target.value);
    updateValidationResult(validationResult, name);
    if (!validationResult.isValid) return;
    if (options?.isAutoFocus) {
      autoFocusNextInput(e.target);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>, name: string) => {
    processValidCardNumberInput(e.target.value, name, validateCardNumberFormat);
  };

  const processValidCardNumberInput = (
    value: string,
    name: string,
    validate: (value: string) => ValidationResult,
  ) => {
    const validationResult = validate(value);
    updateValidationResult(validationResult, name);
    if (!validationResult.isValid) return false;
    updateCardNumbers(value, name);
    return true;
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
          `cardNumbers field error: ${value} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
        );
        updateCardNumbers('', key);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { value, handleChange, handleBlur, errorInfo };
};

export default useCardNumbers;
