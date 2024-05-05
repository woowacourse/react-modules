import { useState } from 'react';
import ValidationResult from '../types/ValidationResult';
import Validation from '../utils/Validation';
import ErrorMessages from '../types/ErrorMessages';

interface PasswordValidationResult {
  password: string;
  validationResult: ValidationResult;
  handleUpdatePassword: (value: string) => void;
}

export const DEFAULT_PARAMS = {
  initialValue: '',
  errorMessages: {
    inputType: '비밀번호는 숫자로만 입력해 주세요.',
  },
};

export default function useCardPassword(
  initialValue: string = DEFAULT_PARAMS.initialValue,
  errorMessages: ErrorMessages = DEFAULT_PARAMS.errorMessages,
): PasswordValidationResult {
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
      errorMessage: errorMessages.inputType,
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
