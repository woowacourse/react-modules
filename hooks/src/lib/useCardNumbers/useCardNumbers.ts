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
  const { cardNumbers, updateCardNumber } = useCardNumberState(initialValues);
  const { validStates, updateValidState } = useCardNumberValidState(initialValues);
  const [validationResult, setValidationResult] = useState<ValidationResult>(
    getValidationResult(initialValues, validStates, errorMessages),
  );

  const handleUpdateCardNumbers = (inputIndex: number, cardNumber: string) => {
    const newCardNumbers = updateCardNumber(inputIndex, cardNumber);
    const newValidStates = updateValidState(inputIndex, validateCardNumber(cardNumber));

    setValidationResult(getValidationResult(newCardNumbers, newValidStates, errorMessages));
  };

  return {
    cardNumbers,
    validStates,
    validationResult,
    handleUpdateCardNumbers,
  };
}

function useCardNumberState(initialValues: string[]) {
  const [cardNumbers, setCardNumbers] = useState(initialValues);

  const updateCardNumber = (inputIndex: number, value: string) => {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[inputIndex] = value;
    setCardNumbers(newCardNumbers);
    return newCardNumbers;
  };

  return { cardNumbers, updateCardNumber };
}

function useCardNumberValidState(initialValues: string[]) {
  const [validStates, setValidStates] = useState(
    initialValues.map((value) => validateCardNumber(value)),
  );

  const updateValidState = (inputIndex: number, isValid: boolean) => {
    const newValidStates = [...validStates];
    newValidStates[inputIndex] = isValid;
    setValidStates(newValidStates);
    return newValidStates;
  };

  return { validStates, updateValidState };
}

function getValidationResult(
  cardNumbers: string[],
  validStates: boolean[],
  errorMessages: ErrorMessages,
) {
  if (cardNumbers.join('').length === 0) {
    return { isValid: null };
  }

  if (!validStates.every((validState) => validState)) {
    return { isValid: false, errorMessage: errorMessages.inputType };
  }

  return { isValid: true };
}

function validateCardNumber(cardNumber: string) {
  return Validation.isNumeric(cardNumber) && Validation.hasLength(cardNumber, 4);
}
