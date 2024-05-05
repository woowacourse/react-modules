import { useState } from 'react';
import ValidationResult from '../types/ValidationResult';
import Validation from '../utils/Validation';
import { validateAllowedYearLength } from '../utils/validateInitialParams';

interface ExpiryDate {
  month: string;
  year: string;
}

interface ExpiryDateValidationResult {
  expiryDate: ExpiryDate;
  validationResult: ValidationResult;
  handleUpdateExpiryDate: (value: ExpiryDate) => void;
}

interface ExpiryDateErrorMessages {
  invalidMonth: string;
  invalidYear: (value: number) => string;
  expiredDate: string;
  allowedYearLengthOutOfRange: string;
}

/**
 * 카드 유효기간 연도(year) 입력값의 자릿수 : 2자리 또는 4자리만 허용합니다. 기본값은 2입니다.
 */
export const DEFAULT_YEAR_LENGTH = [2, 4];

export const DEFAULT_PARAMS = {
  initialValue: { month: '', year: '' },
  allowedYearLength: DEFAULT_YEAR_LENGTH[0],
  errorMessages: {
    invalidMonth: '유효 기간의 월은 01 ~ 12 사이의 2자리 숫자로 입력해 주세요.',
    invalidYear: (allowedLength: number) =>
      `유효 기간의 연도는 ${allowedLength}자리 숫자로 입력해 주세요.`,
    expiredDate: '유효 기간이 만료되었습니다. 확인 후 다시 입력해 주세요.',
    allowedYearLengthOutOfRange: `[ERROR] 유효 기간의 연도는 ${DEFAULT_YEAR_LENGTH[0]}자리 또는 ${DEFAULT_YEAR_LENGTH[1]}자리만 허용됩니다. 다시 확인해 주세요.`,
  },
};

export default function useCardExpiryDate(
  initialValue: ExpiryDate = DEFAULT_PARAMS.initialValue,
  allowedYearLength: number = DEFAULT_PARAMS.allowedYearLength,
  errorMessages: ExpiryDateErrorMessages = DEFAULT_PARAMS.errorMessages,
): ExpiryDateValidationResult {
  validateAllowedYearLength({
    allowedYearLength,
    allowedRange: DEFAULT_YEAR_LENGTH,
    errorMessage: errorMessages.allowedYearLengthOutOfRange,
  });

  const [expiryDate, setExpiryDate] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>(
    getValidationResult(initialValue, allowedYearLength, errorMessages),
  );

  const handleUpdateExpiryDate = (value: ExpiryDate) => {
    setExpiryDate(value);
    setValidationResult(getValidationResult(value, allowedYearLength, errorMessages));
  };

  return {
    expiryDate,
    validationResult,
    handleUpdateExpiryDate,
  };
}

function getValidationResult(
  value: ExpiryDate,
  allowedYearLength: number,
  errorMessages: ExpiryDateErrorMessages,
) {
  if (
    value.month === DEFAULT_PARAMS.initialValue.month &&
    value.year === DEFAULT_PARAMS.initialValue.year
  ) {
    return {
      isValid: null,
    };
  }

  if (!validateExpireMonth(value.month)) {
    return {
      isValid: false,
      errorMessage: errorMessages.invalidMonth,
    };
  }

  if (!validateExpireYear(value.year, allowedYearLength)) {
    return {
      isValid: false,
      errorMessage: errorMessages.invalidYear(allowedYearLength),
    };
  }

  if (!validateExpiryDate(value, allowedYearLength)) {
    return {
      isValid: false,
      errorMessage: errorMessages.expiredDate,
    };
  }

  return { isValid: true };
}

function validateExpiryDate(value: ExpiryDate, allowedYearLength: number) {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear =
    allowedYearLength === 2 ? new Date().getFullYear() - 2000 : new Date().getFullYear();

  const inputMonth = parseInt(value.month, 10);
  const inputYear = parseInt(value.year, 10);

  return inputYear > currentYear || (inputYear === currentYear && inputMonth >= currentMonth);
}

function validateExpireMonth(month: string) {
  return (
    Validation.isNumeric(month) &&
    Validation.hasLength(month, 2) &&
    Validation.isNumberInRange({ min: 1, max: 12, value: Number(month) })
  );
}

function validateExpireYear(year: string, allowedLength: number) {
  return Validation.isNumeric(year) && Validation.hasLength(year, allowedLength);
}
