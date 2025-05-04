import { ChangeEvent, useState } from 'react';
import { EXPIRY_DATE_KEY, ExpiryDateKey } from '../constants';
import { ValidationResult } from '../types';
import { ERROR_MESSAGE, EXPIRY_DATE_ERROR_TYPES } from '../constants';
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

  const validateExpiryDate = (name: ExpiryDateKey, value: string) => {
    const isNumber = checkIsNumber(value);
    const isValidLength = checkIsValidLength(value, 2);
    const isMonthInRange = checkIsInRange(Number(value), 1, 12);

    if (!isNumber) {
      return EXPIRY_DATE_ERROR_TYPES.notNumber;
    }

    if (!isValidLength) {
      return EXPIRY_DATE_ERROR_TYPES.invalidLength;
    }

    if (name === EXPIRY_DATE_KEY.month && !isMonthInRange) {
      return EXPIRY_DATE_ERROR_TYPES.invalidMonthRange;
    }

    return null;
  };

  const validateIsExpiredDate = (name: ExpiryDateKey, value: string) => {
    const { month, year } = expiryDate;
    const targetMonth = name === EXPIRY_DATE_KEY.month ? value : month;
    const targetYear = name === EXPIRY_DATE_KEY.year ? value : year;
    const isExpiredDate = checkIsExpiredDate(targetMonth, targetYear);

    if (isExpiredDate) {
      return EXPIRY_DATE_ERROR_TYPES.expiredDate;
    }

    return null;
  };

  const handleExpiryDateChange = (
    event: ChangeEvent<HTMLInputElement>,
    restrictChange: boolean = true
  ) => {
    const { name, value } = event.target;
    const errorType = validateExpiryDate(name as ExpiryDateKey, value);

    if (restrictChange && errorType) {
      return;
    }

    if (!restrictChange) {
      setValidationResults((prev) => ({
        ...prev,
        [name]: {
          isValid: !Boolean(errorType),
          errorMessage: errorType ? ERROR_MESSAGE.expiryDate[errorType] : '',
        },
      }));
    }

    const isExpiredDate = validateIsExpiredDate(name as ExpiryDateKey, value);
    setValidationResults((prev) => ({
      ...prev,
      [name]: {
        isValid: !Boolean(isExpiredDate),
        errorMessage: isExpiredDate
          ? ERROR_MESSAGE.expiryDate[isExpiredDate]
          : '',
      },
    }));

    setExpiryDate((prev) => ({ ...prev, [name]: value }));
  };

  return {
    expiryDate,
    validationResults,
    validateExpiryDate,
    validateIsExpiredDate,
    handleExpiryDateChange,
  };
}

export default useExpiryDate;
