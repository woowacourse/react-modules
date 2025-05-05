import { ChangeEvent, useCallback, useState } from 'react';
import {
  CARD_NUMBER_ERROR_TYPES,
  CardNumbersKey,
  ERROR_MESSAGE,
} from '../config';
import { ValidationResult } from '../types';
import { checkIsNumber, checkIsValidLength } from '../validators';

function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState<
    Record<CardNumbersKey, string>
  >({
    part1: '',
    part2: '',
    part3: '',
    part4: '',
  });

  const [validationResults, setValidationResults] = useState<
    Record<CardNumbersKey, ValidationResult>
  >({
    part1: { isValid: true, errorMessage: '' },
    part2: { isValid: true, errorMessage: '' },
    part3: { isValid: true, errorMessage: '' },
    part4: { isValid: true, errorMessage: '' },
  });

  const getCardNumberValidationError = useCallback((value: string) => {
    const isNumber = checkIsNumber(value);
    const isValidLength = checkIsValidLength(value, 4);

    if (!isNumber) return CARD_NUMBER_ERROR_TYPES.notNumber;
    if (!isValidLength) return CARD_NUMBER_ERROR_TYPES.invalidLength;

    return null;
  }, []);

  const handleCardNumbersChange = useCallback(
    (
      event: ChangeEvent<HTMLInputElement>,
      options?: { skipValidation?: boolean }
    ) => {
      const { name, value } = event.target;
      const errorType = getCardNumberValidationError(value);

      const shouldSkipValidation = options?.skipValidation ?? false;

      if (!shouldSkipValidation && errorType) {
        return;
      }

      if (shouldSkipValidation) {
        setValidationResults((prev) => ({
          ...prev,
          [name]: {
            isValid: !Boolean(errorType),
            errorMessage: errorType ? ERROR_MESSAGE.cardNumber[errorType] : '',
          },
        }));
      }

      setCardNumbers((prev) => ({ ...prev, [name]: value }));
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
