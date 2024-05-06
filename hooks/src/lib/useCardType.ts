import useSelect from './useSelect';
import { useEffect } from 'react';
import validateCardType from './validator/validateCardType';
import { UseCardType } from './type';
import useValidation from './useValidation';

interface UseCardTypeProps {
  initialValue: string;
  options: string[];
  placeholder: string;
}

const useCardType = ({ initialValue, options, placeholder }: UseCardTypeProps): UseCardType => {
  const { value, setValue } = useSelect(initialValue);
  const { errorInfo, updateValidationResult } = useValidation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const validationResult = validateCardType(event.target.value, [placeholder, ...options]);
    updateValidationResult(validationResult);
    if (!validationResult.isValid) return;
    setValue(event.target.value);
  };

  useEffect(() => {
    if (!validateCardType(initialValue, [placeholder, ...options]).isValid) {
      console.error(
        `card type field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
      );
      setValue(placeholder);
    }
  }, [initialValue, setValue, options, placeholder]);

  return { value, handleChange, errorInfo };
};

export default useCardType;
