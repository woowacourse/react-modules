import { useState } from 'react';
import { REGEX } from './constants';

interface ValidationResult {
  isValid: boolean;
  errorMessages?: string[];
}

const useCardHolderValidation = () => {
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errorMessages: [],
  });

  const handleCardHolderChange = (value: string, maxLength: number) => {
    const errors: string[] = [];
    const isValidNameFormat = REGEX.onlyUpperAlphabetAndOneBlank.test(value);
    const isValidLength = value.length <= maxLength;

    if (!isValidNameFormat) {
      errors.push('1개 이하의 공백이 연속된 대문자 영어로 입력해주세요.');
    }

    if (!isValidLength) {
      errors.push(`${maxLength}자 이내로 입력해주세요.`);
    }

    setValidationResult({
      isValid: isValidNameFormat && isValidLength,
      errorMessages: errors,
    });
  };

  return { validationResult, handleCardHolderChange };
};

export default useCardHolderValidation;
