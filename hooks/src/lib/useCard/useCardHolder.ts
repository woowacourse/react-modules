import { useEffect } from 'react';
import useInput from '../useInput';
import { validateCardHolderFormat, validateEnglish } from '../validator';
import { UseCard } from '../type';
import useValidation from '../useValidation';

const useCardHolder = (initialValue: string): UseCard => {
  const { value, setValue } = useInput(initialValue.toUpperCase());
  const { errorInfo, checkValidInput } = useValidation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!checkValidInput(event.target.value, validateEnglish)) return;
    setValue(event.target.value.toUpperCase());
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    checkValidInput(event.target.value, validateCardHolderFormat);
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
