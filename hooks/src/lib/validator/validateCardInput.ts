import { validatorUtils } from './utils/validateUtils';
import { BRAND_CARD_NUMBER_LENGTH, VALIDATION_LENGTH } from './constants/validationRules';

export function validateExpirationDateMonth(month: string) {
  const errorResult = {
    IS_NUMBER: validatorUtils.isNumber(month),
    IS_NUMBER_RANGE: validatorUtils.isValidNumberRange(Number(month), 1, 12),
    IS_VALID_LENGTH: validatorUtils.isValidLength(month, VALIDATION_LENGTH.EXPIRATION.MONTH),
  };
  return errorResult;
}

export function validateExpirationDateYear(month: string, year: string) {
  const errorResult = {
    IS_NUMBER: validatorUtils.isNumber(year),
    IS_VALID_LENGTH: validatorUtils.isValidLength(year, VALIDATION_LENGTH.EXPIRATION.YEAR),
    IS_EXPIRATION: validatorUtils.isValidExpirationDate(month, year),
  };
  return errorResult;
}

export function validateCVC(cvc: string) {
  return {
    IS_NUMBER_STRING: validatorUtils.isNumber(cvc),
    IS_VALID_LENGTH: validatorUtils.isValidLength(cvc, VALIDATION_LENGTH.CVC),
  };
}

export function validatePassword(password: string) {
  return {
    IS_NUMBER_STRING: validatorUtils.isNumber(password),
    IS_VALID_LENGTH: validatorUtils.isValidLength(password, VALIDATION_LENGTH.PASSWORD),
  };
}

export function validateCardNumber(cardNumber: string) {
  return {
    IS_NUMBER_STRING: validatorUtils.isNumber(cardNumber),
  };
}

export function validateFullCardNumber(cardBrand: string, fullCardNumber: string) {
  if (!cardBrand || cardBrand === 'UNKNOWN') {
    return {};
  }

  if (!(cardBrand in BRAND_CARD_NUMBER_LENGTH)) {
    return {};
  }

  const isValid = validatorUtils.isValidLength(
    fullCardNumber.replace(/\D/g, ''),
    BRAND_CARD_NUMBER_LENGTH[cardBrand as keyof typeof BRAND_CARD_NUMBER_LENGTH],
  );

  const errorKey = `IS_VALID_FULL_LENGTH_BRAND_${cardBrand}`;

  return {
    [errorKey]: isValid,
  };
}
