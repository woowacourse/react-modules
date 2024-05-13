import { ChangeEvent, useState } from "react";
import { REGEX } from "./constants";

interface ValidationResult {
  isValid: boolean;
  errorMessages: string[];
}

const MAX_LENGTH = 2;

const useCardPassword = () => {
  const [cardPassword, setCardPassword] = useState("");
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: false,
    errorMessages: [],
  });

  const handleCardPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const errors: string[] = [];
    const isNumericInput = REGEX.onlyNumber.test(value);
    const isValidLength = value.length === MAX_LENGTH;

    if (!isNumericInput) {
      errors.push("숫자로 입력해주세요.");
    }

    if (!isValidLength) {
      errors.push(`${MAX_LENGTH}자리 비밀번호를 입력해주세요.`);
    }

    setValidationResult({
      isValid: isNumericInput && isValidLength,
      errorMessages: errors,
    });

    if (errors.length !== 0) return;

    setCardPassword(value);
  };

  return { validationResult, cardPassword, handleCardPasswordChange };
};

export default useCardPassword;
