import { validateNumberError, validateCvcLengthError } from './utils/cardInputValidations';
import createCardFieldHook from './utils/createCardFieldHook';

export function useCvcInput() {
  const { value, handleChange, errorMessage } = createCardFieldHook<string>('', [validateNumberError, validateCvcLengthError]);
  return { cvc: value, handleCvcChange: handleChange, cvcErrorMessage: errorMessage };
}
