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
  const [validationResult, setValidationResult] = useState<ValidationResult>(
    getValidationResult(initialValue, errorMessages),
  );

  const handleUpdatePassword = (value: string) => {
    setPassword(value);
    setValidationResult(getValidationResult(value, errorMessages));
  };

  return {
    password,
    validationResult,
    handleUpdatePassword,
  };
}

function getValidationResult(value: string, errorMessages: ErrorMessages) {
  if (value === DEFAULT_PARAMS.initialValue) {
    return { isValid: null };
  }

  if (!validatePassword(value)) {
    return { isValid: false, errorMessage: errorMessages.inputType };
  }

  return { isValid: true };
}

function validatePassword(value: string) {
  return Validation.isNumeric(value) && Validation.hasLength(value, 2);
}
