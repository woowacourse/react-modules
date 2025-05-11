import createCardFieldHook from './utils/createCardFieldHook';
import { validateNumberError } from './utils/cardInputValidations';
import { INITIAL_CARD_NUMBER } from './card.contant';

export function useCardNumberInput() {
  const firstHook = createCardFieldHook(INITIAL_CARD_NUMBER.first, [validateNumberError]);
  const secondHook = createCardFieldHook(INITIAL_CARD_NUMBER.second, [validateNumberError]);
  const thirdHook = createCardFieldHook(INITIAL_CARD_NUMBER.third, [validateNumberError]);
  const fourthHook = createCardFieldHook(INITIAL_CARD_NUMBER.fourth, [validateNumberError]);

  const cardNumbers = {
    first: firstHook.value,
    second: secondHook.value,
    third: thirdHook.value,
    fourth: fourthHook.value,
  };
  const cardNumberError = {
    first: firstHook.errorMessage,
    second: secondHook.errorMessage,
    third: thirdHook.errorMessage,
    fourth: fourthHook.errorMessage,
  };

  const handleCardNumberChange = (key: keyof typeof cardNumbers, value: string) => {
    if (key === 'first') firstHook.handleChange(value as typeof INITIAL_CARD_NUMBER.first);
    else if (key === 'second') secondHook.handleChange(value as typeof INITIAL_CARD_NUMBER.second);
    else if (key === 'third') thirdHook.handleChange(value as typeof INITIAL_CARD_NUMBER.third);
    else fourthHook.handleChange(value as typeof INITIAL_CARD_NUMBER.fourth);
  };

  return { cardNumbers, handleCardNumberChange, cardNumberError };
}
