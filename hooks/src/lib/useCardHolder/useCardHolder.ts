import ValidationResult, { ERROR_TYPE } from "../types/ValidationResult";

import Validation from "../utils/Validation";
import { useState } from "react";

interface CardHolderValidationResult {
  cardHolder: string;
  validationResult: ValidationResult;
  handleUpdateCardHolder: (value: string) => void;
}

export default function useCardHolder(
  initialValue = ""
): CardHolderValidationResult {
  const [cardHolder, setCardHolder] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
  });

  const handleUpdateCardHolder = (value: string) => {
    setCardHolder(value);

    const validationResult: ValidationResult = validateCardHolder(value)
      ? { isValid: true }
      : {
          isValid: false,
          errorType: ERROR_TYPE.englishOnly,
          errorMessage: "영문자만 입력할 수 있습니다.",
        };

    setValidationResult(validationResult);
  };

  return {
    cardHolder,
    validationResult,
    handleUpdateCardHolder,
  };
}
const validateCardHolder = (value: string) => {
  return Validation.isEnglishWithSpace(value);
};
