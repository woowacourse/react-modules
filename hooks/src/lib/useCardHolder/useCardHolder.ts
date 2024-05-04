import { useState } from "react";
import ValidationResult from "../types/ValidationResult";
import Validation from "../utils/Validation";

interface CardHolderValidationResult {
  cardHolder: string;
  validationResult: ValidationResult;
  handleUpdateCardHolder: (value: string) => void;
}

export default function useCardHolder(
  initialValue?: string
): CardHolderValidationResult {
  const [cardHolder, setCardHolder] = useState(initialValue ?? "");
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
  });

  const handleUpdateCardHolder = (value: string) => {
    setCardHolder(value);

    if (validateCardHolder(value)) {
      setValidationResult({ isValid: true });
      return;
    }

    setValidationResult({
      isValid: false,
      errorMessage: "영문자만 입력할 수 있습니다.",
    });
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
