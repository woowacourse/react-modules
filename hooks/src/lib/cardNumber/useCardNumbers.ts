import { useCallback, useMemo, useState } from 'react';
import {
  CARD_NUMBER_ERROR_TYPES,
  CardBrandType,
  CardNumberFieldType,
  ERROR_MESSAGE,
} from '../config';
import { ValidationResult } from '../types';
import { checkIsNumber, checkIsValidLength } from '../validators';
import {
  createFieldLengthMap,
  createInitialCardNumbers,
  createValidationResult,
  detectCardBrand,
} from '../utils';

function useCardNumbers<T extends string>(fields: CardNumberFieldType<T>[]) {
  const [cardNumbers, setCardNumbers] = useState<Record<T, string>>(() =>
    createInitialCardNumbers(fields)
  );
  const fieldLengthMap = useMemo(() => createFieldLengthMap(fields), [fields]);

  const getCardNumberValidationError = useCallback(
    (key: T, value: string) => {
      const isNumber = checkIsNumber(value);
      const isValidLength = checkIsValidLength(value, fieldLengthMap[key]);

      if (!isNumber) return CARD_NUMBER_ERROR_TYPES.notNumber;
      if (!isValidLength) return CARD_NUMBER_ERROR_TYPES.invalidLength;

      return null;
    },
    [fields]
  );

  const validationResults: Record<T, ValidationResult> = useMemo(
    () =>
      Object.entries(cardNumbers).reduce(
        (acc, [key, value]) => {
          acc[key as T] = createValidationResult(ERROR_MESSAGE.cardNumber, [
            getCardNumberValidationError(key as T, value as string),
          ]);
          return acc;
        },
        {} as Record<T, ValidationResult>
      ),
    [cardNumbers, getCardNumberValidationError]
  );

  const cardBrand: CardBrandType = useMemo(() => {
    const fullNumber = Object.values(cardNumbers).join('');
    return detectCardBrand(fullNumber);
  }, [cardNumbers]);

  const handleCardNumbersChange = useCallback(
    (key: T, value: string, options?: { skipValidation?: boolean }) => {
      const errorType = getCardNumberValidationError(key as T, value);

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
    cardBrand,
    getCardNumberValidationError,
    handleCardNumbersChange,
  };
}

export default useCardNumbers;
