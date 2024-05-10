import ValidationResult, { ERROR_TYPE } from "../types/ValidationResult";

import Validation from "../utils/Validation";
import { useState } from "react";

interface CVCValidationResult {
  CVC: string;
  validationResult: ValidationResult;
  handleUpdateCVC: (value: string) => void;
}

export default function useCardCVC(initialValue = ""): CVCValidationResult {
  const [CVC, setCVC] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
  });

  const handleUpdateCVC = (value: string) => {
    setCVC(value);

    const validationResult: ValidationResult = validateCVC(value)
      ? { isValid: true }
      : {
          isValid: false,
          errorType: ERROR_TYPE.invalidLength,
          errorMessage: "CVC 번호는 3자리 숫자로 입력하셔야 합니다.",
        };

    setValidationResult(validationResult);
  };

  return { CVC, validationResult, handleUpdateCVC };
}

function validateCVC(value: string) {
  return Validation.isNumeric(value) && Validation.hasLength(value, 3);
}
