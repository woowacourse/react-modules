import { useCallback, useMemo, useState } from 'react';
import { CARD_NUMBER_ERROR_TYPES, ERROR_MESSAGE } from '../config';
import { ValidationResult } from '../types';
import { createValidationResult } from '../utils/createValidationResult';
import { checkIsNumber, checkIsValidLength } from '../validators';
import { createInitialCardNumbers } from '../utils/createInitialCardNumbers';
import { CardBrand, FieldDefinition } from '../config/fieldType';
import {
  isVisa,
  isMasterCard,
  isAmex,
  isDiners,
  isUnionPay,
} from './validation';

function useCardNumbers<T extends string>(fields: FieldDefinition<T>[]) {
  const [cardNumbers, setCardNumbers] = useState<Record<T, string>>(() =>
    createInitialCardNumbers(fields)
  );

  const fieldLengthMap = fields.reduce(
    (acc, field) => {
      acc[field.name] = field.length;
      return acc;
    },
    {} as Record<T, number>
  );

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

  const brand: CardBrand = useMemo(() => {
    const fullNumber = Object.values(cardNumbers).join('');

    if (isVisa(fullNumber)) return 'VISA';
    if (isMasterCard(fullNumber)) return 'MASTERCARD';
    if (isAmex(fullNumber)) return 'AMEX';
    if (isDiners(fullNumber)) return 'DINERS';
    if (isUnionPay(fullNumber)) return 'UNIONPAY';

    return 'UNKNOWN';
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
    brand,
    getCardNumberValidationError,
    handleCardNumbersChange,
  };
}

export default useCardNumbers;
