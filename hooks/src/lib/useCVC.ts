import { useEffect } from 'react';
import useInput from './useInput';
import { CustomValidator } from './types';
import { CVCReturn } from './index';

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

const useCVC = (initialValue: string, options?: CustomValidator): CVCReturn => {
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
      `cvc field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
    );
  }, [clearInvalidInitialValue, initialValue]);

  return {
    value,
    runValidationInputTypeByChange: handleChange,
    runValidationFieldRulesByBlur: handleBlur,
    validationResult,
  };
};

export default useCVC;
