import ErrorMessages from '../types/ErrorMessages';
import Validation from '../utils/Validation';

import { DEFAULT_PARAMS } from './useCardPassword';

export function getValidationResult(
  value: string,
  allowedLength: number,
  errorMessages: ErrorMessages,
) {
  if (value === DEFAULT_PARAMS.initialValue) {
    return { isValid: null };
  }

  if (!Validation.isNumeric(value)) {
    return { isValid: false, errorMessage: errorMessages.inputType };
  }

  if (!Validation.hasLength(value, allowedLength)) {
    return { isValid: false, errorMessage: errorMessages.inputLength!(allowedLength) };
  }

  return { isValid: true };
}
