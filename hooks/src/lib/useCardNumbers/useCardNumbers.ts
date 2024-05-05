import { useState } from 'react';
import ValidationResult from '../types/ValidationResult';
import Validation from '../utils/Validation';

import ErrorMessages from '../types/ErrorMessages';

interface CardNumbersValidationResult {
  cardNumbers: string[];
  validStates: boolean[];
  validationResult: ValidationResult;
  handleUpdateCardNumbers: (inputIndex: number, value: string) => void;
}

export const DEFAULT_PARAMS = {
  initialValue: Array(4).fill(''),
  errorMessages: {
    inputType: '카드 번호는 숫자로만 입력해 주세요.',
  },
};

export default function useCardNumbers(
  initialValues: string[] = DEFAULT_PARAMS.initialValue,
  errorMessages: ErrorMessages = DEFAULT_PARAMS.errorMessages,
): CardNumbersValidationResult {
  const [cardNumbers, setCardNumbers] = useState(initialValues);
  const [validStates, setValidStates] = useState(
    initialValues.map((value) => validateCardNumber(value)),
  );
  const [validationResult, setValidationResult] = useState<ValidationResult>({ isValid: true });

  const updateCardNumbers = (inputIndex: number, value: string) => {
    setCardNumbers((prev) => {
      const newCardNumbers = [...prev];
      newCardNumbers[inputIndex] = value;
      return newCardNumbers;
    });
  };

  const handleUpdateCardNumbers = (inputIndex: number, value: string) => {
    updateCardNumbers(inputIndex, value);

    const isNewInputValid = validateCardNumber(value);

    const newValidStates = validStates.map((prevState, index) =>
      index === inputIndex ? isNewInputValid : prevState,
    );
    setValidStates(newValidStates);

    const isAllInputValid = newValidStates.every((isValid) => isValid === true);

    if (isAllInputValid) {
      setValidationResult({ isValid: true });
      return;
    }

    setValidationResult({
      isValid: false,
      errorMessage: errorMessages.inputType,
    });
  };

  return {
    cardNumbers,
    validStates,
    validationResult,
    handleUpdateCardNumbers,
  };
}

function validateCardNumber(value: string) {
  return Validation.isNumeric(value) && Validation.hasLength(value, 4);
}
