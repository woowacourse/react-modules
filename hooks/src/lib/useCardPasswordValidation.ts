import { useState } from 'react';
import { REGEX } from './constants';

interface ValidationResult {
  isValid: boolean;
  errorMessages?: string[];
}

const useCardPasswordValidation = () => {
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errorMessages: [],
  });

  const handleCardPasswordChange = (value: string, maxLength: number) => {
    const errors: string[] = [];
    const isNumericInput = REGEX.onlyNumber.test(value);
    const isValidLength = value.length === maxLength;

    if (!isNumericInput) {
      errors.push('숫자로 입력해주세요.');
    }

    if (!isValidLength) {
      errors.push(`${maxLength}자리 비밀번호를 입력해주세요.`);
    }

    setValidationResult({
      isValid: isNumericInput && isValidLength,
      errorMessages: errors,
    });
  };

  return { validationResult, handleCardPasswordChange };
};

export default useCardPasswordValidation;
