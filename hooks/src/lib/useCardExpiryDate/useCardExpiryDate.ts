import { useState } from 'react';
import ValidationResult from '../types/ValidationResult';
import Validation from '../utils/Validation';

interface ExpiryDate {
  month: string;
  year: string;
}

interface ExpiryDateParams {
  isYearFourDigits?: boolean;
  initialValue?: ExpiryDate;
  errorMessages?: ExpiryDateErrorMessages;
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
}

/**
 * 카드 유효기간 연도(year) 입력값의 자릿수 : 2자리 또는 4자리만 허용합니다. 기본값은 2입니다.
 */
export const DEFAULT_YEAR_LENGTH = [2, 4];

export const DEFAULT_PARAMS = {
  isYearFourDigits: false,
  initialValue: { month: '', year: '' },
  errorMessages: {
    invalidMonth: '유효 기간의 월은 01 ~ 12 사이의 2자리 숫자로 입력해 주세요.',
    invalidYear: (allowedLength: number) =>
      `유효 기간의 연도는 ${allowedLength}자리 숫자로 입력해 주세요.`,
    expiredDate: '유효 기간이 만료되었습니다. 확인 후 다시 입력해 주세요.',
  },
};

export default function useCardExpiryDate({
  isYearFourDigits = DEFAULT_PARAMS.isYearFourDigits,
  initialValue = DEFAULT_PARAMS.initialValue,
  errorMessages = DEFAULT_PARAMS.errorMessages,
}: ExpiryDateParams = {}): ExpiryDateValidationResult {
  const [expiryDate, setExpiryDate] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>(
    getValidationResult(initialValue, isYearFourDigits, errorMessages),
  );

  const handleUpdateExpiryDate = (value: ExpiryDate) => {
    setExpiryDate(value);
    setValidationResult(getValidationResult(value, isYearFourDigits, errorMessages));
  };

  return {
    expiryDate,
    validationResult,
    handleUpdateExpiryDate,
  };
}

function getValidationResult(
  value: ExpiryDate,
  isYearFourDigits: boolean,
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

  const allowedLength = isYearFourDigits ? 4 : 2;

  if (!validateExpireYear(value.year, allowedLength)) {
    return {
      isValid: false,
      errorMessage: errorMessages.invalidYear(allowedLength),
    };
  }

  if (!validateExpiryDate(value, isYearFourDigits)) {
    return {
      isValid: false,
      errorMessage: errorMessages.expiredDate,
    };
  }

  return { isValid: true };
}

function validateExpiryDate(value: ExpiryDate, isYearFourDigits: boolean) {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = isYearFourDigits ? new Date().getFullYear() : new Date().getFullYear() - 2000;

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
