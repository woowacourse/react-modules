import useSelect from './useSelect';
import { useEffect } from 'react';

const onChange = <T>(value: T) => {
  if (typeof value === 'undefined') {
    return { isValid: false, errorMessage: '카드사를 선택해주세요.' };
  }

  return { isValid: true, errorMessage: '' };
};

const useCardType = <T>(initialValue: T) => {
  const { value, setValue, handleChange, errorInfo } = useSelect(initialValue, {
    onChange,
  });

  useEffect(() => {
    if (!onChange(initialValue).isValid) {
      console.error(
        `card type field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
      );
      setValue('' as T);
    }
  }, [initialValue, setValue]);

  return { value, handleChange, errorInfo };
};

export default useCardType;
