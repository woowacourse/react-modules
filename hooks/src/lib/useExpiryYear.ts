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
  const nowYear = Number(new Date().getFullYear().toString().slice(2));
  const isValidLength = value.length === 0 || value.length === 2;
  const isValidYear = Number(value) >= nowYear;

  if (!isValidLength) {
    return { isValid: false, errorMessage: '년은 2자리로 입력해주세요' };
  }

  if (!isValidYear) {
    return { isValid: false, errorMessage: `유효 기간은 ${nowYear}년 이후로 입력해주세요` };
  }

  return { isValid: true, errorMessage: '' };
};

export interface ExpiryYearOptions extends CustomValidator {
  isAutoFocus?: boolean;
}

const useExpiryYear = (initialValue: string, options?: ExpiryYearOptions) => {
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

export default useExpiryYear;
