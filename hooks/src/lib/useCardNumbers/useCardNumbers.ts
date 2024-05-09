import ValidationResult, {
  ERROR_MESSAGE,
  ERROR_TYPE,
  ValidationError,
} from "../types/ValidationResult";

import Validation from "../utils/Validation";
import { useState } from "react";

interface CardNumberValidationResult {
  cardNumber: string;
  formattedCardNumber: string[];
  validationResult?: ValidationResult;
  handleUpdateCardNumber: (value: string) => void;
}

export default function useCardNumber(
  initialValues: string = ""
): CardNumberValidationResult {
  const [cardNumber, setCardNumber] = useState(initialValues);

  const [validationResult, setValidationResult] = useState<ValidationResult>();

  const handleUpdateCardNumber = (value: string) => {
    try {
      validateBeforeUpdate(value);

      setCardNumber(value);
      setValidationResult({ isValid: true });

      validateAfterUpdate(value);
    } catch (error) {
      if (error instanceof ValidationError) {
        setValidationResult({
          isValid: false,
          errorType: error.errorType,
          errorMessage: error.errorMessage,
        });
      }
    }
  };

  return {
    cardNumber,
    formattedCardNumber: [""], // TODO 카드 포맷팅
    validationResult,
    handleUpdateCardNumber,
  };
}

const validateBeforeUpdate = (value: string) => {
  if (!Validation.isNumeric(value)) {
    throw new ValidationError(
      ERROR_TYPE.numericOnly,
      ERROR_MESSAGE.numericOnly
    );
  }
};

const validateAfterUpdate = (value: string) => {
  if (!Validation.hasLength(value, 16)) {
    throw new ValidationError(
      ERROR_TYPE.invalidLength,
      ERROR_MESSAGE.invalidLength
    );
  }
};
