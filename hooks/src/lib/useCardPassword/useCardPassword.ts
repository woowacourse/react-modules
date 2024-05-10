import ValidationResult, { ERROR_TYPE } from "../types/ValidationResult";

import Validation from "../utils/Validation";
import { useState } from "react";

interface PasswordValidationResult {
  password: string;
  validationResult: ValidationResult;
  handleUpdatePassword: (value: string) => void;
}

export default function useCardPassword(
  initialValue = ""
): PasswordValidationResult {
  const [password, setPassword] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
  });

  const handleUpdatePassword = (value: string) => {
    setPassword(value);

    const validationResult: ValidationResult = validatePassword(value)
      ? { isValid: true }
      : {
          isValid: false,
          errorType: ERROR_TYPE.invalidLength,
          errorMessage: "두 자리의 숫자여야 합니다. 다시 입력해주세요.",
        };

    setValidationResult(validationResult);
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
