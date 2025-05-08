import { validatorUtils } from './utils/validateUtils';

export function validateExpirationDateMonth(month: string, year: string) {
  const errorResult = {
    IS_NUMBER: validatorUtils.isNumber(month),
    IS_NUMBER_RANGE: validatorUtils.isValidNumberRange(Number(month), 1, 12),
    IS_EXPIRATION: validatorUtils.isValidExpirationDate(month, year),
    IS_VALID_LENGTH: validatorUtils.isValidLength(month, 2),
  };
  return errorResult;
}

export function validateExpirationDateYear(month: string, year: string) {
  const errorResult = {
    IS_NUMBER: validatorUtils.isNumber(year),
    IS_EXPIRATION: validatorUtils.isValidExpirationDate(month, year),
    IS_VALID_LENGTH: validatorUtils.isValidLength(year, 2),
  };
  return errorResult;
}

export function validateCVC(cvc: string) {
  return {
    IS_NUMBER_STRING: validatorUtils.isNumber(cvc),
    IS_VALID_LENGTH: validatorUtils.isValidLength(cvc, 3),
  };
}

export function validatePassword(password: string) {
  return {
    IS_NUMBER_STRING: validatorUtils.isNumber(password),
    IS_VALID_LENGTH: validatorUtils.isValidLength(password, 2),
  };
}

export function validateCardNumber(cardNumber: string) {
  return {
    IS_NUMBER_STRING: validatorUtils.isNumber(cardNumber),
    IS_VALID_LENGTH: validatorUtils.isValidLength(cardNumber, 4),
  };
}
