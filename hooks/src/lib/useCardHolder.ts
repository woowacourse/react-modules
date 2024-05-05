import { useEffect } from 'react';
import useInput from './useInput';
import { validateCardHolderFormat, validateEnglish } from './validator';

const useCardHolder = (initialValue: string) => {
  const { value, setValue, handleBlur, errorInfo, setErrorInfo } = useInput(
    initialValue.toUpperCase(),
    {
      onChange: validateEnglish,
      onBlur: validateCardHolderFormat,
    },
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = validateEnglish(event.target.value);
    setErrorInfo(validationResult);
    if (!validationResult.isValid) return;
    setValue(event.target.value.toUpperCase());
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
