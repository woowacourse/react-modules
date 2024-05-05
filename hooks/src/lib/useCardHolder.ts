import { useEffect } from 'react';
import useInput from './useInput';
import { CustomValidator } from './types';

const validateInputType = (value: string) => {
  const isEnglish = /^$|^[a-zA-Z ]+$/.test(value);

  if (!isEnglish) {
    return { isValid: false, errorMessage: '소유자명은 영어로만 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const validateFieldRules = (value: string) => {
  const isValidHolderFormat = /^(?=\S)(?!.*\s\s).*\s+(?=\S).*$/.test(value);

  if (!isValidHolderFormat) {
    return {
      isValid: false,
      errorMessage: '소유자명은 양 끝의 공백이 포함되면 안 되고, 사이의 공백이 한 개 있어야합니다.',
    };
  }

  return { isValid: true, errorMessage: '' };
};

const useCardHolder = (initialValue: string, options?: CustomValidator) => {
  const { customValidateInputType, customValidateFieldRules } = options ?? {};
  const { value, setValue, handleBlur, errorInfo, setErrorInfo } = useInput(
    initialValue.toUpperCase(),
    {
      validateInputType: customValidateInputType ?? validateInputType,
      validateFieldRules: customValidateFieldRules ?? validateFieldRules,
    },
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = validateInputType(event.target.value);
    setErrorInfo(validationResult);
    if (!validationResult.isValid) return;
    setValue(event.target.value.toUpperCase());
  };

  useEffect(() => {
    if (!validateInputType(initialValue).isValid || !validateFieldRules(initialValue).isValid) {
      console.error(
        `cardholder field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
      );
      setValue('');
    }
  }, [initialValue, setValue]);

  return {
    value,
    runValidationInputTypeByChange: handleChange,
    runValidationFieldRulesByBlur: handleBlur,
    errorInfo,
  };
};

export default useCardHolder;
