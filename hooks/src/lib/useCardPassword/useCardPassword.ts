import { useState } from "react";
import ValidationResult from "../types/ValidationResult";
import Validation from "../utils/Validation";

interface PasswordValidationResult {
  password: string;
  validationResult: ValidationResult;
  handleUpdatePassword: (value: string) => void;
}

export default function useCardPassword(
  initialValue: string,
  alwaysUpdatePassword: boolean = false
): PasswordValidationResult {
  const [password, setPassword] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
  });

  const handleUpdatePassword = (value: string) => {
    if (!validatePassword(value)) {
      setValidationResult({
        isValid: false,
        errorMessage: "두 자리의 숫자여야 합니다. 다시 입력해주세요.",
      });
      if (alwaysUpdatePassword) setPassword(value);
      return;
    }

    setValidationResult({ isValid: true });
    setPassword(value);
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
