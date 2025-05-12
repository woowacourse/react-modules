import { useCallback, useMemo, useState } from 'react';
import {
  ERROR_MESSAGE,
  EXPIRY_DATE_ERROR_TYPES,
  EXPIRY_DATE_KEY,
  ExpiryDateKey,
} from '../config';
import { ValidationResult } from '../types';
import {
  checkIsExpiredDate,
  checkIsInRange,
  checkIsNumber,
  checkIsValidLength,
} from '../validators';
import { createValidationResult } from '../utils';

function useExpiryDate() {
  const [expiryDate, setExpiryDate] = useState<Record<ExpiryDateKey, string>>({
    month: '',
    year: '',
  });

  const getExpiryDateValidationError = useCallback(
    (name: ExpiryDateKey, value: string) => {
      if (value === '') return null;

      const isNumber = checkIsNumber(value);
      const isValidLength = checkIsValidLength(value, 2);
      const isMonthInRange = checkIsInRange(Number(value), 1, 12);

      if (!isNumber) return EXPIRY_DATE_ERROR_TYPES.notNumber;
      if (!isValidLength) return EXPIRY_DATE_ERROR_TYPES.invalidLength;
      if (name === EXPIRY_DATE_KEY.month && !isMonthInRange)
        return EXPIRY_DATE_ERROR_TYPES.invalidMonthRange;

      return null;
    },
    []
  );

  const getExpiryDateExpiredError = useCallback(
    (
      name: ExpiryDateKey,
      value: string,
      other: Record<ExpiryDateKey, string>
    ) => {
      if (value === '') return null;

      const targetMonth = name === EXPIRY_DATE_KEY.month ? value : other.month;
      const targetYear = name === EXPIRY_DATE_KEY.year ? value : other.year;
      const isExpiredDate = checkIsExpiredDate(targetMonth, targetYear);

      if (isExpiredDate) return EXPIRY_DATE_ERROR_TYPES.expiredDate;

      return null;
    },
    []
  );

  const validationResults: Record<ExpiryDateKey, ValidationResult> = useMemo(
    () => ({
      month: createValidationResult(ERROR_MESSAGE.expiryDate, [
        getExpiryDateExpiredError(
          EXPIRY_DATE_KEY.month,
          expiryDate.month,
          expiryDate
        ),
        getExpiryDateValidationError(EXPIRY_DATE_KEY.month, expiryDate.month),
      ]),
      year: createValidationResult(ERROR_MESSAGE.expiryDate, [
        getExpiryDateExpiredError(
          EXPIRY_DATE_KEY.year,
          expiryDate.year,
          expiryDate
        ),
        getExpiryDateValidationError(EXPIRY_DATE_KEY.year, expiryDate.year),
      ]),
    }),
    [expiryDate, getExpiryDateExpiredError, getExpiryDateValidationError]
  );

  const handleExpiryDateChange = useCallback(
    (
      key: ExpiryDateKey,
      value: string,
      options?: { skipValidation?: boolean }
    ) => {
      const shouldSkipValidation = options?.skipValidation ?? false;

      const errorType = getExpiryDateValidationError(key, value);

      if (!shouldSkipValidation && errorType) {
        return;
      }

      setExpiryDate((prev) => ({ ...prev, [key]: value }));
    },
    [expiryDate]
  );

  return {
    expiryDate,
    validationResults,
    getExpiryDateValidationError,
    getExpiryDateExpiredError,
    handleExpiryDateChange,
  };
}

export default useExpiryDate;
