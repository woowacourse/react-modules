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
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
  });

  const handleUpdateCVC = (value: string) => {
    setCVC(value);

    if (validateCVC(value)) {
      setValidationResult({ isValid: true });
      return;
    }

    setValidationResult({
      isValid: false,
      errorMessage: errorMessages.inputType,
    });
  };

  return { CVC, validationResult, handleUpdateCVC };
}

function validateCVC(value: string) {
  return Validation.isNumeric(value) && Validation.hasLength(value, 3);
}
