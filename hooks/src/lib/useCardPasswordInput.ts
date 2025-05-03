import { validateNumberError, validateCardPasswordLengthError } from './utils/cardInputValidations';
import createCardFieldHook from './utils/createCardFieldHook';

export function useCardPasswordInput() {
  const { value, handleChange, errorMessage } = createCardFieldHook<string>('', [
    validateNumberError,
    validateCardPasswordLengthError,
  ]);
  return { cardPassword: value, handleCardPasswordChange: handleChange, cardPasswordErrorMessage: errorMessage };
}
