import { useState } from 'react';
import ValidationResult from '../types/ValidationResult';
import Validation from '../utils/Validation';
import ErrorMessages from '../types/ErrorMessages';

import { validateAllowedLength } from '../utils/validateInitialParams';

interface PasswordValidationResult {
  password: string;
  validationResult: ValidationResult;
  handleUpdatePassword: (value: string) => void;
}

export const DEFAULT_LENGTH = {
  /**
   * 카드 비밀번호의 자릿수 : 2자리 ~ 4자리 사이로만 허용합니다.
   */
  minLength: 2,
  maxLength: 4,
};

export const DEFAULT_PARAMS = {
  allowedLength: DEFAULT_LENGTH.minLength,
  initialValue: '',
  errorMessages: {
    inputType: `비밀번호는 숫자로만 입력해 주세요.`,
    inputLength: (allowedLength: number) =>
      `비밀번호는 ${allowedLength}자리의 숫자로 입력해주세요.`,
    allowedLengthOutOfRange: `[ERROR] 비밀번호 자릿수는 ${DEFAULT_LENGTH.minLength}~${DEFAULT_LENGTH.maxLength} 사이의 숫자로 설정되어야 합니다. 다시 확인해 주세요.`,
  },
};

export default function useCardPassword(
  allowedLength: number = DEFAULT_PARAMS.allowedLength,
  initialValue: string = DEFAULT_PARAMS.initialValue,
  errorMessages: ErrorMessages = DEFAULT_PARAMS.errorMessages,
): PasswordValidationResult {
  validateAllowedLength({
    allowedLength,
    minLength: DEFAULT_LENGTH.minLength,
    maxLength: DEFAULT_LENGTH.maxLength,
    errorMessage: errorMessages.allowedLengthOutOfRange as string,
  });

  const [password, setPassword] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>(
    getValidationResult(initialValue, allowedLength, errorMessages),
  );

  const handleUpdatePassword = (value: string) => {
    setPassword(value);
    setValidationResult(getValidationResult(value, allowedLength, errorMessages));
  };

  return {
    password,
    validationResult,
    handleUpdatePassword,
  };
}

function getValidationResult(value: string, allowedLength: number, errorMessages: ErrorMessages) {
  if (value === DEFAULT_PARAMS.initialValue) {
    return { isValid: null };
  }

  if (!Validation.isNumeric(value)) {
    return { isValid: false, errorMessage: errorMessages.inputType };
  }

  if (!Validation.hasLength(value, allowedLength)) {
    return { isValid: false, errorMessage: errorMessages.inputLength!(allowedLength) };
  }

  return { isValid: true };
}
