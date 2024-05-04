import { useState } from 'react';
import ValidationResult from '../types/ValidationResult';
import Validation from '../utils/Validation';

interface PasswordValidationResult {
  password: string;
  validationResult: ValidationResult;
  handleUpdatePassword: (value: string) => void;
}

export default function useCardPassword(initialValue: string = ''): PasswordValidationResult {
  const [password, setPassword] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
  });

  const handleUpdatePassword = (value: string) => {
    setPassword(value);

    if (validatePassword(value)) {
      setValidationResult({ isValid: true });
      return;
    }

    setValidationResult({
      isValid: false,
      errorMessage: '두 자리의 숫자여야 합니다. 다시 입력해주세요.',
    });
  };

  return {
    password,
    validationResult,
    handleUpdatePassword,
  };
}

const validatePassword = (value: string) => {
  return Validation.isNumeric(value) && Validation.hasLength(value, 2);
};
