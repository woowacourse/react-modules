import useSelect from './useSelect';
import { useEffect } from 'react';
import validateCardType from './validator/validateCardType';

interface UseCardTypeProps {
  initialValue: string;
  options: string[];
  placeholder: string;
}

const useCardType = ({ initialValue, options, placeholder }: UseCardTypeProps) => {
  const { value, handleChange, setValue, errorInfo } = useSelect(
    initialValue,
    {
      onChange: validateCardType,
    },
    [placeholder, ...options],
  );

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
