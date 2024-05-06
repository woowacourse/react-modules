import { CustomValidator } from './types';
import useInputs from './useInputs';
import { useEffect } from 'react';

const validateInputType = (value: string) => {
  const isNumber = !Number.isNaN(Number(value));

  if (!isNumber) {
    return { isValid: false, errorMessage: '숫자를 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const validateFieldRules = (value: string) => {
  const isValidLength = value.length === 0 || value.length === 4;

  if (!isValidLength) {
    return { isValid: false, errorMessage: '카드번호는 4자리로만 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

export interface CardNumbersOptions extends CustomValidator {
  isAutoFocus?: boolean;
}

const useCardNumbers = (initialValue: Record<string, string>, options?: CardNumbersOptions) => {
  const { isAutoFocus, customValidateInputType, customValidateFieldRules } = options ?? {};
  const {
    value,
    setValue,
    handleBlur,
    validationResult,
    isValidValue,
    focusNextInputWhenMaxLength,
    clearInvalidInitialValues,
  } = useInputs(initialValue, {
    validateInputType: customValidateInputType ?? validateInputType,
    validateFieldRules: customValidateFieldRules ?? validateFieldRules,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    if (!isValidValue(event.target.value, name, 'inputType')) return;

    setValue(prev => ({
      ...prev,
      [name]: event.target.value,
    }));

    if (event.target.value.length === event.target.maxLength) {
      focusNextInputWhenMaxLength(event, isAutoFocus ?? false, name);
    }
  };

  useEffect(() => {
    clearInvalidInitialValues(
      initialValue,
      (value: string) =>
        `cardNumbers field error: ${value} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    value,
    runValidationInputTypeByChange: handleChange,
    runValidationFieldRulesByBlur: handleBlur,
    validationResult,
  };
};

export default useCardNumbers;
