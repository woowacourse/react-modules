import { useState } from 'react';
import ValidationResult from '../types/ValidationResult';
import Validation from '../utils/Validation';
import ErrorMessages from '../types/ErrorMessages';

interface CVCValidationResult {
  CVC: string;
  validationResult: ValidationResult;
  handleUpdateCVC: (value: string) => void;
}

export const DEFAULT_PARAMS = {
  initialValue: '',
  errorMessages: {
    inputType: 'CVC 번호는 숫자로만 입력해 주세요.',
  },
};

export default function useCardCVC(
  initialValue: string = DEFAULT_PARAMS.initialValue,
  errorMessages: ErrorMessages = DEFAULT_PARAMS.errorMessages,
): CVCValidationResult {
  const [CVC, setCVC] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>(
    getValidationResult(initialValue, errorMessages),
  );

  const handleUpdateCVC = (value: string) => {
    setCVC(value);
    setValidationResult(getValidationResult(value, errorMessages));
  };

  return { CVC, validationResult, handleUpdateCVC };
}

function getValidationResult(value: string, errorMessages: ErrorMessages) {
  if (value === DEFAULT_PARAMS.initialValue) {
    return { isValid: null };
  }

  if (!validateCVC(value)) {
    return { isValid: false, errorMessage: errorMessages.inputType };
  }

  return { isValid: true };
}

function validateCVC(value: string) {
  return Validation.isNumeric(value) && Validation.hasLength(value, 3);
}
