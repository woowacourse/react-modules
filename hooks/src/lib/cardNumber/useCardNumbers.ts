import { useCallback, useMemo, useState } from 'react';
import {
  CARD_NUMBER_ERROR_TYPES,
  CardNumbersKey,
  ERROR_MESSAGE,
} from '../config';
import { ValidationResult } from '../types';
import { checkIsNumber, checkIsValidLength } from '../validators';
import { createValidationResult } from '../utils/createValidationResult';

function useCardNumbers<T extends string>(initialValue: Record<T, string>) {
  const [cardNumbers, setCardNumbers] =
    useState<Record<T, string>>(initialValue);

  const getCardNumberValidationError = useCallback((value: string) => {
    const isNumber = checkIsNumber(value);
    const isValidLength = checkIsValidLength(value, 4);

    if (!isNumber) return CARD_NUMBER_ERROR_TYPES.notNumber;
    if (!isValidLength) return CARD_NUMBER_ERROR_TYPES.invalidLength;

    return null;
  }, []);

  const validationResults: Record<T, ValidationResult> = useMemo(
    () =>
      Object.entries(cardNumbers).reduce(
        (acc, [key, value]) => {
          acc[key as T] = createValidationResult(ERROR_MESSAGE.cardNumber, [
            getCardNumberValidationError(value as string),
          ]);
          return acc;
        },
        {} as Record<T, ValidationResult>
      ),
    [cardNumbers, getCardNumberValidationError]
  );

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
