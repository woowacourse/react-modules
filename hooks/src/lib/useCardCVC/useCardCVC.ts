import { useState } from "react";
import ValidationResult from "../types/ValidationResult";
import Validation from "../utils/Validation";

interface CVCValidationResult {
  CVC: string;
  validationResult: ValidationResult;
  handleUpdateCVC: (value: string) => void;
}

export default function useCardCVC(
  initialValue: string,
  alwaysUpdateCVC: boolean = false
): CVCValidationResult {
  const [CVC, setCVC] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
  });

  const handleUpdateCVC = (value: string) => {
    if (!validateCVC(value)) {
      setValidationResult({
        isValid: false,
        errorMessage: "CVC 번호는 3자리 숫자로 입력하셔야 합니다.",
      });
      if (alwaysUpdateCVC) setCVC(value);
      return;
    }
    setValidationResult({ isValid: true });
    setCVC(value);
  };

  return { CVC, validationResult, handleUpdateCVC };
}

function validateCVC(value: string) {
  return Validation.isNumeric(value) && Validation.hasLength(value, 3);
}
