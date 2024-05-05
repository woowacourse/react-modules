import { useState } from 'react';
import ValidationResult from '../types/ValidationResult';
import Validation from '../utils/Validation';

import ErrorMessages from '../types/ErrorMessages';
import { validateTotalCardNumbersLength } from '../utils/validateInitialParams';

type CardNumbersValidState = boolean | null;

interface CardNumbersValidationResult {
  cardNumbers: string[];
  validStates: CardNumbersValidState[];
  validationResult: ValidationResult;
  handleUpdateCardNumbers: (inputIndex: number, value: string) => void;
}

/**
 * 전체 카드 번호 입력값의 최대 자릿수 : 20자리까지만 허용합니다.
 */
export const TOTAL_CARD_NUMBERS_LENGTH = 20;

export const DEFAULT_PARAMS = {
  format: [4, 4, 4, 4],
  initialValue: [],
  errorMessages: {
    inputType: '카드 번호는 각 자릿수에 맞춰 숫자로만 입력해 주세요.',
    inputLength: (length: number) => `해당 입력 필드에는 ${length}자리의 숫자로 입력해 주세요.`,
    allowedLengthOutOfRange: `[ERROR] 카드 번호는 총합 ${TOTAL_CARD_NUMBERS_LENGTH}자리 이내로만 설정 가능합니다. 다시 확인해 주세요.`,
  },
};

export default function useCardNumbers(
  format: number[] = DEFAULT_PARAMS.format,
  initialValues: string[] = DEFAULT_PARAMS.initialValue,
  errorMessages: ErrorMessages = DEFAULT_PARAMS.errorMessages,
): CardNumbersValidationResult {
  validateTotalCardNumbersLength({
    format,
    totalLength: TOTAL_CARD_NUMBERS_LENGTH,
    errorMessage: errorMessages.allowedLengthOutOfRange as string,
  });

  const { cardNumbers, updateCardNumber } = useCardNumberState(format, initialValues);
  const { validStates, updateValidState } = useCardNumberValidState(format, initialValues);
  const [validationResult, setValidationResult] = useState<ValidationResult>(
    getValidationResult(initialValues, validStates, errorMessages),
  );

  const handleUpdateCardNumbers = (inputIndex: number, cardNumber: string) => {
    const newCardNumbers = updateCardNumber(inputIndex, cardNumber);
    const newValidStates = updateValidState(
      inputIndex,
      validateCardNumber(cardNumber, format[inputIndex]),
    );

    setValidationResult(getValidationResult(newCardNumbers, newValidStates, errorMessages));
  };

  return {
    cardNumbers,
    validStates,
    validationResult,
    handleUpdateCardNumbers,
  };
}

function useCardNumberState(format: number[], initialValues: string[]) {
  const initialCardNumbers = initialValues.length ? initialValues : Array(format.length).fill('');
  const [cardNumbers, setCardNumbers] = useState(initialCardNumbers);

  const updateCardNumber = (inputIndex: number, value: string) => {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[inputIndex] = value;
    setCardNumbers(newCardNumbers);
    return newCardNumbers;
  };

  return { cardNumbers, updateCardNumber };
}

function useCardNumberValidState(format: number[], initialValues: string[]) {
  const initialValidStates: CardNumbersValidState[] = initialValues.length
    ? initialValues.map((value, index) => validateCardNumber(value, format[index]))
    : Array(format.length).fill(null);

  const [validStates, setValidStates] = useState(initialValidStates);

  const updateValidState = (inputIndex: number, isValid: CardNumbersValidState) => {
    const newValidStates = [...validStates];
    newValidStates[inputIndex] = isValid;
    setValidStates(newValidStates);
    return newValidStates;
  };

  return { validStates, updateValidState };
}

function getValidationResult(
  cardNumbers: string[],
  validStates: CardNumbersValidState[],
  errorMessages: ErrorMessages,
) {
  if (cardNumbers.join('').length === 0) {
    return { isValid: null };
  }

  if (validStates.every((validState) => validState)) {
    return { isValid: true };
  }

  if (validStates.some((validState) => validState === false)) {
    return { isValid: false, errorMessage: errorMessages.inputType };
  } else {
    return { isValid: false };
  }
}

function validateCardNumber(cardNumber: string, partLength: number) {
  if (!cardNumber.length) return null;
  return Validation.isNumeric(cardNumber) && Validation.hasLength(cardNumber, partLength);
}
