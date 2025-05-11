// hooks/useCardExpirationInput.ts
import createCardFieldHook from './utils/createCardFieldHook';
import { validateNumberError, validateMonthRangeError, validateYearLengthError } from './utils/cardInputValidations';
import { INITIAL_CARD_EXPIRATION } from './card.contant';

export function useCardExpirationInput() {
  const monthHook = createCardFieldHook(INITIAL_CARD_EXPIRATION.month, [validateNumberError, validateMonthRangeError]);
  const yearHook = createCardFieldHook(INITIAL_CARD_EXPIRATION.year, [validateNumberError, validateYearLengthError]);

  const cardExpiration = {
    month: monthHook.value,
    year: yearHook.value,
  };
  const cardExpirationError = {
    month: monthHook.errorMessage,
    year: yearHook.errorMessage,
  };

  const handleCardExpirationChange = (key: keyof typeof cardExpiration, value: string) => {
    if (key === 'month') monthHook.handleChange(value as typeof INITIAL_CARD_EXPIRATION.month);
    else yearHook.handleChange(value as typeof INITIAL_CARD_EXPIRATION.year);
  };

  return { cardExpiration, handleCardExpirationChange, cardExpirationError };
}
