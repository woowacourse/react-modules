import Validation from '../utils/Validation';
import { CardHolderErrorMessages, DEFAULT_LENGTH, DEFAULT_PARAMS } from './useCardHolder';

export function getValidationResult(
  value: string,
  allowedLength: number,
  errorMessages: CardHolderErrorMessages,
) {
  if (value === DEFAULT_PARAMS.initialValue) {
    return { isValid: null };
  }

  if (!Validation.isEnglishWithSpace(value)) {
    return { isValid: false, errorMessage: errorMessages.inputType };
  }

  if (
    !Validation.isNumberInRange({
      min: DEFAULT_LENGTH.minLength,
      max: allowedLength,
      value: value.length,
    })
  ) {
    return { isValid: false, errorMessage: errorMessages.inputLength(allowedLength) };
  }

  return { isValid: true };
}
