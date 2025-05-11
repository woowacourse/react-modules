import { useCallback, useMemo, useState } from 'react';
import {
  CARD_NUMBER_ERROR_TYPES,
  CardNumbersKey,
  ERROR_MESSAGE,
} from '../config';
import { ValidationResult } from '../types';
import { checkIsNumber, checkIsValidLength } from '../validators';
import { createValidationResult } from '../utils/createValidationResult';

function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState<
    Record<CardNumbersKey, string>
  >({
    part1: '',
    part2: '',
    part3: '',
    part4: '',
  });

  const getCardNumberValidationError = useCallback((value: string) => {
    const isNumber = checkIsNumber(value);
    const isValidLength = checkIsValidLength(value, 4);

    if (!isNumber) return CARD_NUMBER_ERROR_TYPES.notNumber;
    if (!isValidLength) return CARD_NUMBER_ERROR_TYPES.invalidLength;

    return null;
  }, []);

  const validationResults: Record<CardNumbersKey, ValidationResult> =
    useMemo(() => {
      return {
        part1: createValidationResult(ERROR_MESSAGE.cardNumber, [
          getCardNumberValidationError(cardNumbers.part1),
        ]),
        part2: createValidationResult(ERROR_MESSAGE.cardNumber, [
          getCardNumberValidationError(cardNumbers.part2),
        ]),
        part3: createValidationResult(ERROR_MESSAGE.cardNumber, [
          getCardNumberValidationError(cardNumbers.part3),
        ]),
        part4: createValidationResult(ERROR_MESSAGE.cardNumber, [
          getCardNumberValidationError(cardNumbers.part4),
        ]),
      };
    }, [cardNumbers, getCardNumberValidationError]);

  const handleCardNumbersChange = useCallback(
    (
      key: CardNumbersKey,
      value: string,
      options?: { skipValidation?: boolean }
    ) => {
      const errorType = getCardNumberValidationError(value);

      const shouldSkipValidation = options?.skipValidation ?? false;

      if (!shouldSkipValidation && errorType) {
        return;
      }

      setCardNumbers((prev) => ({ ...prev, [key]: value }));
    },
    [getCardNumberValidationError]
  );

  return {
    cardNumbers,
    validationResults,
    getCardNumberValidationError,
    handleCardNumbersChange,
  };
}

export default useCardNumbers;
