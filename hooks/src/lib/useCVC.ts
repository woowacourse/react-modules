import { useEffect } from 'react';
import useInput, { ValidationResult } from './useInput';

const validateInputType = (value: string) => {
  const isNumber = !Number.isNaN(Number(value));

  if (!isNumber) {
    return { isValid: false, errorMessage: '숫자를 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const validateFieldRules = (value: string) => {
  const isValidLength = value.length === 0 || value.length === 3 || value.length === 4;

  if (!isValidLength) {
    return { isValid: false, errorMessage: 'cvc는 3자리 또는 4자리로 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

export interface CVCOptions {
  customValidateInputType?: (value: string) => ValidationResult;
  customValidateFieldRules?: (value: string) => ValidationResult;
}

const useCVC = (initialValue: string, options?: CVCOptions) => {
  const { customValidateInputType, customValidateFieldRules } = options ?? {};
  const { value, setValue, handleChange, handleBlur, errorInfo } = useInput(initialValue, {
    validateInputType: customValidateInputType ?? validateInputType,
    validateFieldRules: customValidateFieldRules ?? validateFieldRules,
  });

  useEffect(() => {
    if (!validateInputType(initialValue).isValid || !validateFieldRules(initialValue).isValid) {
      console.error(
        `cvc field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
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

export default useCVC;
