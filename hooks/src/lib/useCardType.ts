import { CustomSelectValidator } from './types';
import useSelect from './useSelect';
import { useEffect } from 'react';
import { CardTypeReturn } from './index';

const validateInputType = (value: string) => {
  if (typeof value === 'undefined') {
    return { isValid: false, errorMessage: '카드사를 선택해주세요.' };
  }

  return { isValid: true, errorMessage: '' };
};

const validateFieldRules = (value: string, options: string[]) => {
  if (!options.includes(value)) {
    return { isValid: false, errorMessage: '올바르지 않은 선택입니다.' };
  }

  return { isValid: true, errorMessage: '' };
};

export interface UseCardTypeProps {
  initialValue: string;
  options: string[];
  placeholder: string;
  customValidateOptions?: CustomSelectValidator;
}

const useCardType = ({
  initialValue,
  options,
  placeholder,
  customValidateOptions,
}: UseCardTypeProps): CardTypeReturn => {
  const { customValidateInputType, customValidateFieldRules } = customValidateOptions ?? {};
  const { value, handleChange, validationResult, clearInvalidInitialValue } = useSelect(
    initialValue,
    {
      validateInputType: customValidateInputType ?? validateInputType,
      validateFieldRules: customValidateFieldRules ?? validateFieldRules,
    },
    [placeholder, ...options],
  );

  useEffect(() => {
    clearInvalidInitialValue(
      initialValue,
      placeholder,
      `card type field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
    );
  }, [clearInvalidInitialValue, initialValue, placeholder]);

  return { value, runValidationByChange: handleChange, validationResult };
};

export default useCardType;
