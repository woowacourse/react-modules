import { validateNumberError, validateCardPasswordLengthError } from './utils/cardInputValidations';
import createCardFieldHook from './utils/createCardFieldHook';

export function useCardPasswordInput() {
  const { value, handleChange, error } = createCardFieldHook<string>('', [
    validateNumberError,
    validateCardPasswordLengthError,
  ]);
  return { cardPassword: value, handleCardPasswordChange: handleChange, cardPasswordError: error };
}
