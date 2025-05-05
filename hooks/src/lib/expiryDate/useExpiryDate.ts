import { ChangeEvent, useState } from 'react';
import { EXPIRY_DATE_KEY, ExpiryDateKey } from '../constants';
import { ValidationResult } from '../types';
import { ERROR_MESSAGE, EXPIRY_DATE_ERROR_TYPES } from '../constants';

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

  const checkIsNumber = (value: string) => {
    const regex = /^[0-9]*$/;
    return regex.test(value);
  };

  const checkIsValidLength = (value: string) => {
    return value.length <= 2;
  };

  const checkIsMonthInRange = (value: string) => {
    return Number(value) >= 1 && Number(value) <= 12;
  };

  const checkIsExpiredDate = (month: string, year: string) => {
    if (month.length !== 2 || year.length !== 2) return false;

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;

    const expiryYear = 2000 + Number(year);
    const expiryMonth = Number(month);

    if (expiryYear < currentYear) return true;
    if (expiryYear === currentYear && expiryMonth <= currentMonth) return true;
    return false;
  };

  const validateExpiryDate = (name: ExpiryDateKey, value: string) => {
    const isNumber = checkIsNumber(value);
    const isValidLength = checkIsValidLength(value);
    const isMonthInRange = checkIsMonthInRange(value);

    if (!isNumber) {
      return { isValid: false, errorType: EXPIRY_DATE_ERROR_TYPES.notNumber };
    }

    if (!isValidLength) {
      return {
        isValid: false,
        errorType: EXPIRY_DATE_ERROR_TYPES.invalidLength,
      };
    }

    if (name === EXPIRY_DATE_KEY.month && !isMonthInRange) {
      return {
        isValid: false,
        errorType: EXPIRY_DATE_ERROR_TYPES.invalidMonthRange,
      };
    }

    return { isValid: true };
  };

  const validateIsExpiredDate = (name: ExpiryDateKey, value: string) => {
    const { month, year } = expiryDate;
    const targetMonth = name === EXPIRY_DATE_KEY.month ? value : month;
    const targetYear = name === EXPIRY_DATE_KEY.year ? value : year;
    const isExpiredDate = checkIsExpiredDate(targetMonth, targetYear);

    if (isExpiredDate) {
      return { isValid: false, errorType: EXPIRY_DATE_ERROR_TYPES.expiredDate };
    }

    return { isValid: true };
  };

  const handleExpiryDateChange = (
    event: ChangeEvent<HTMLInputElement>,
    restrictChange: boolean = true
  ) => {
    const { name, value } = event.target;
    const { isValid, errorType } = validateExpiryDate(
      name as ExpiryDateKey,
      value
    );

    if (restrictChange && errorType) {
      return;
    }

    if (!restrictChange) {
      setValidationResults((prev) => ({
        ...prev,
        [name]: {
          isValid,
          errorMessage: errorType ? ERROR_MESSAGE.expiryDate[errorType] : '',
        },
      }));
    }

    const validateDateResult = validateIsExpiredDate(
      name as ExpiryDateKey,
      value
    );
    setValidationResults((prev) => ({
      ...prev,
      [name]: {
        isValid: validateDateResult.isValid,
        errorMessage: validateDateResult.errorType
          ? ERROR_MESSAGE.expiryDate[validateDateResult.errorType]
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
