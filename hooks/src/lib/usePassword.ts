import { useEffect } from 'react';
import useInput from './useInput';
import { CustomValidator } from './types';

const validateInputType = (value: string) => {
  const isNumber = !Number.isNaN(Number(value));

  if (!isNumber) {
    return { isValid: false, errorMessage: '숫자를 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const validateFieldRules = (value: string) => {
  const isValidLength = value.length === 0 || value.length === 2;

  if (!isValidLength) {
    return { isValid: false, errorMessage: '비밀번호는 2자리로 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const usePassword = (initialValue: string, options?: CustomValidator) => {
  const { customValidateInputType, customValidateFieldRules } = options ?? {};
  const { value, handleChange, handleBlur, validationResult, clearInvalidInitialValue } = useInput(
    initialValue,
    {
      validateInputType: customValidateInputType ?? validateInputType,
      validateFieldRules: customValidateFieldRules ?? validateFieldRules,
    },
  );

  useEffect(() => {
    clearInvalidInitialValue(
      initialValue,
      `password field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
    );
  }, [clearInvalidInitialValue, initialValue]);

  return {
    value,
    runValidationInputTypeByChange: handleChange,
    runValidationFieldRulesByBlur: handleBlur,
    validationResult,
  };
};

export default usePassword;
