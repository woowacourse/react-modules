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
  const [validationResult, setValidationResult] = useState<ValidationResult>(
    getValidationResult(initialValue, errorMessages),
  );

  const handleUpdateCardHolder = (value: string) => {
    setCardHolder(value);
    setValidationResult(getValidationResult(value, errorMessages));
  };

  return {
    cardHolder,
    validationResult,
    handleUpdateCardHolder,
  };
}

function getValidationResult(value: string, errorMessages: ErrorMessages) {
  if (value === DEFAULT_PARAMS.initialValue) {
    return { isValid: null };
  }

  if (!validateCardHolder(value)) {
    return { isValid: false, errorMessage: errorMessages.inputType };
  }

  return { isValid: true };
}

function validateCardHolder(value: string) {
  return Validation.isEnglishWithSpace(value);
}
