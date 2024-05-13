import Validation from '../utils/Validation';
import { DEFAULT_PARAMS, ExpiryDate, ExpiryDateErrorMessages } from './useCardExpiryDate';

export function getValidationResult(
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
