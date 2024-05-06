import { CustomValidator } from './types';
import useInput from './useInput';
import { useEffect } from 'react';

const validateInputType = (value: string) => {
  const isNumber = !Number.isNaN(Number(value));

  if (!isNumber) {
    return { isValid: false, errorMessage: '숫자를 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const validateFieldRules = (value: string) => {
  const isValidLength = value.length === 0 || value.length === 2;
  const isValidMonth = Number(value) >= 1 && Number(value) <= 12;

  if (!isValidLength) {
    return { isValid: false, errorMessage: '월은 2자리로 입력해주세요' };
  }

  if (!isValidMonth) {
    return { isValid: false, errorMessage: '월은 01~12 사이의 수로 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

export interface ExpiryMonthOptions extends CustomValidator {
  isAutoFocus?: boolean;
}

const useExpiryMonth = (initialValue: string, options?: ExpiryMonthOptions) => {
  const { isAutoFocus, customValidateInputType, customValidateFieldRules } = options ?? {};
  const {
    value,
    setValue,
    handleBlur,
    validationResult,
    isValidValue,
    focusNextInputWhenMaxLength,
  } = useInput(initialValue, {
    validateInputType: customValidateInputType ?? validateInputType,
    validateFieldRules: customValidateFieldRules ?? validateFieldRules,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isValidValue(event.target.value, 'inputType')) return;
    setValue(event.target.value);

    if (event.target.value.length === event.target.maxLength) {
      focusNextInputWhenMaxLength(event, isAutoFocus ?? false);
    }
  };

  useEffect(() => {
    if (!validateInputType(initialValue).isValid || !validateFieldRules(initialValue).isValid) {
      console.error(
        `expiry date field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
      );
      setValue('');
    }
  }, [initialValue, setValue]);

  return {
    value,
    runValidationInputTypeByChange: handleChange,
    runValidationFieldRulesByBlur: handleBlur,
    validationResult,
  };
};

export default useExpiryMonth;
