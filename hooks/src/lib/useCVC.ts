import { ChangeEvent, useState } from "react";
import { REGEX } from "./constants";

interface ValidationResult {
  isValid: boolean;
  errorMessages: string[];
}

const MAX_LENGTH = 3;

const useCVC = () => {
  const [cvc, setCVC] = useState("");
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: false,
    errorMessages: [],
  });

  const handleCVCChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const errors: string[] = [];
    const isNumericInput = REGEX.onlyNumber.test(value);
    const isValidLength = value.length === MAX_LENGTH;

    if (!isNumericInput) {
      errors.push("숫자로 입력해주세요.");
    }

    if (!isValidLength) {
      errors.push(`${MAX_LENGTH}자로 입력해주세요.`);
    }
    setValidationResult({
      isValid: isNumericInput && isValidLength,
      errorMessages: errors,
    });
    if (!isNumericInput) return;
    setCVC(value);
  };

  return { validationResult, cvc, handleCVCChange };
};

export default useCVC;
