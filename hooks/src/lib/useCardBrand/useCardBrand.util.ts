import { CardBrandErrorMessages, DEFAULT_PARAMS } from './useCardBrand';

export function validateInitialParams(
  allowedBrands: string[],
  initialValue: string,
  errorMessages: CardBrandErrorMessages,
) {
  if (allowedBrands.length < 1) {
    throw new Error(errorMessages.emptyAllowedBrands);
  }

  if (!validateBrand([...allowedBrands, ''], initialValue)) {
    throw new Error(errorMessages.initialValueNotExistsInAllowedBrands);
  }
}

export function getValidationResult(
  allowedBrands: string[],
  value: string,
  errorMessages: CardBrandErrorMessages,
) {
  if (value === DEFAULT_PARAMS.initialValue) {
    return { isValid: null };
  }

  if (!validateBrand(allowedBrands, value)) {
    return {
      isValid: false,
      errorMessage: errorMessages.invalidBrand,
    };
  }

  return { isValid: true };
}

export function validateBrand(allowedBrands: string[], value: string) {
  return allowedBrands.includes(value);
}
