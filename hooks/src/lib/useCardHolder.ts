import { useEffect } from 'react';
import useInput from './useInput';
import { CustomValidator } from './types';
import { CardHolderReturn } from './index';

const validateInputType = (value: string) => {
  const isEnglish = /^$|^[a-zA-Z ]+$/.test(value);

  if (!isEnglish) {
    return { isValid: false, errorMessage: '소유자명은 영어로만 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const validateFieldRules = (value: string) => {
  // 성과 이름의 구조처럼 문자열과 문자열 사이에 공백이 1개 존재하며, 연속으로 2개는 불가
  const isValidHolderFormat = /^(?=\S)(?!.*\s\s).*\s+(?=\S).*$/.test(value);

  if (!isValidHolderFormat) {
    return {
      isValid: false,
      errorMessage: '소유자명은 양 끝의 공백이 포함되면 안 되고, 사이의 공백이 한 개 있어야합니다.',
    };
  }

  return { isValid: true, errorMessage: '' };
};

const useCardHolder = (initialValue: string, options?: CustomValidator): CardHolderReturn => {
  const { customValidateInputType, customValidateFieldRules } = options ?? {};
  const { value, setValue, handleBlur, isValidValue, validationResult, clearInvalidInitialValue } =
    useInput(initialValue.toUpperCase(), {
      validateInputType: customValidateInputType ?? validateInputType,
      validateFieldRules: customValidateFieldRules ?? validateFieldRules,
    });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isValidValue(event.target.value, 'inputType')) return;
    setValue(event.target.value.toUpperCase());
  };

  useEffect(() => {
    clearInvalidInitialValue(
      initialValue,
      `cardholder field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
    );
  }, [clearInvalidInitialValue, initialValue]);

  return {
    value,
    runValidationInputTypeByChange: handleChange,
    runValidationFieldRulesByBlur: handleBlur,
    validationResult,
  };
};

export default useCardHolder;
