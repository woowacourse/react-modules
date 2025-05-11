import createCardFieldHook from './utils/createCardFieldHook';
import { validateNumberError } from './utils/cardInputValidations';

export function useCardNumberInput() {
  const { value, handleChange, errorMessage } = createCardFieldHook<string>('', [validateNumberError]);
  return { cardNumbers: value, handleCardNumbersChange: handleChange, cardNumbersErrorMessage: errorMessage };
}
