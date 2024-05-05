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
  const { validationResult, updateValidationResult } = useValidationResult(
    validStates.every((validState) => validState),
    errorMessages,
  );

  const handleUpdateCardNumbers = (inputIndex: number, cardNumber: string) => {
    updateCardNumber(inputIndex, cardNumber);

    const newValidStates = updateValidState(inputIndex, validateCardNumber(cardNumber));
    const isAllCardNumbersValid = newValidStates.every((validState) => validState);

    if (isAllCardNumbersValid) {
      updateValidationResult(true);
      return;
    }

    updateValidationResult(false, errorMessages.inputType);
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
    setCardNumbers((prevNumbers) => {
      const newCardNumbers = [...prevNumbers];
      newCardNumbers[inputIndex] = value;
      return newCardNumbers;
    });
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

function useValidationResult(isValid: boolean, errorMessages: ErrorMessages) {
  const initialValidationResult = isValid
    ? { isValid }
    : { isValid, errorMessage: errorMessages.inputType };
  const [validationResult, setValidationResult] =
    useState<ValidationResult>(initialValidationResult);

  const updateValidationResult = (isValid: boolean, errorMessage?: string) => {
    setValidationResult({ isValid, errorMessage });
  };

  return { validationResult, updateValidationResult };
}

function validateCardNumber(cardNumber: string) {
  return Validation.isNumeric(cardNumber) && Validation.hasLength(cardNumber, 4);
}
