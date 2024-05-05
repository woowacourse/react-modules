import { useState } from 'react';
import ValidationResult from '../types/ValidationResult';
import Validation from '../utils/Validation';
import ErrorMessages from '../types/ErrorMessages';

interface CardHolderValidationResult {
  cardHolder: string;
  validationResult: ValidationResult;
  handleUpdateCardHolder: (value: string) => void;
}

export const DEFAULT_PARAMS = {
  initialValue: '',
  errorMessages: {
    inputType: '카드 소유자는 영문 대소문자로 입력해 주세요.',
  },
};

export default function useCardHolder(
  initialValue: string = DEFAULT_PARAMS.initialValue,
  errorMessages: ErrorMessages = DEFAULT_PARAMS.errorMessages,
): CardHolderValidationResult {
  const [cardHolder, setCardHolder] = useState(initialValue);
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
      errorMessage: errorMessages.inputType,
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
