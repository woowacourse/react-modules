import { useCallback, useState } from 'react';
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

function useExpiryDate() {
  const [expiryDate, setExpiryDate] = useState<Record<ExpiryDateKey, string>>({
    month: '',
    year: '',
  });

  const [validationResults, setValidationResults] = useState<
    Record<ExpiryDateKey, ValidationResult>
  >({
    month: { isValid: true, errorMessage: '' },
    year: { isValid: true, errorMessage: '' },
  });

  const getExpiryDateValidationError = useCallback(
    (name: ExpiryDateKey, value: string) => {
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
    (name: ExpiryDateKey, value: string) => {
      const { month, year } = expiryDate;
      const targetMonth = name === EXPIRY_DATE_KEY.month ? value : month;
      const targetYear = name === EXPIRY_DATE_KEY.year ? value : year;
      const isExpiredDate = checkIsExpiredDate(targetMonth, targetYear);

      if (isExpiredDate) return EXPIRY_DATE_ERROR_TYPES.expiredDate;

      return null;
    },
    [expiryDate]
  );

  const handleExpiryDateChange = useCallback(
    (
      key: ExpiryDateKey,
      value: string,
      options?: { skipValidation?: boolean }
    ) => {
      const errorType = getExpiryDateValidationError(key, value);

      const shouldSkipValidation = options?.skipValidation ?? false;

      if (!shouldSkipValidation && errorType) {
        return;
      }

      if (shouldSkipValidation) {
        setValidationResults((prev) => ({
          ...prev,
          [key]: {
            isValid: !Boolean(errorType),
            errorMessage: errorType ? ERROR_MESSAGE.expiryDate[errorType] : '',
          },
        }));
      }

      const isExpiredDate = getExpiryDateExpiredError(key, value);
      setValidationResults((prev) => ({
        ...prev,
        [key]: {
          isValid: !Boolean(isExpiredDate),
          errorMessage: isExpiredDate
            ? ERROR_MESSAGE.expiryDate[isExpiredDate]
            : '',
        },
      }));

      setExpiryDate((prev) => ({ ...prev, [key]: value }));
    },
    [getExpiryDateValidationError, getExpiryDateExpiredError]
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
