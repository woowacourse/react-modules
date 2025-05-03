import { useState } from 'react';
import { CardExpiration } from './types/card';
import { validateMonthRangeError, validateNumberError, validateYearLengthError } from './utils/cardInputValidations';

export function useCardExpirationInput() {
  const [cardExpiration, setCardExpiration] = useState<CardExpiration>({ month: '', year: '' });

  const validateCardExpiration = () => {
    const errors: CardExpiration = {
      month: '',
      year: '',
    };

    if (cardExpiration.month !== '') {
      const numError = validateNumberError(cardExpiration.month);
      if (!numError.isValid && numError.errorMessage) errors.month = numError.errorMessage;

      const monthRangeError = validateMonthRangeError(cardExpiration.month);
      if (!monthRangeError.isValid && monthRangeError.errorMessage) errors.month = monthRangeError.errorMessage;
    }

    if (cardExpiration.year !== '') {
      const numError = validateNumberError(cardExpiration.year);
      if (!numError.isValid && numError.errorMessage) {
        errors.year = numError.errorMessage;
      } else {
        const yearLengthError = validateYearLengthError(cardExpiration.year);
        if (!yearLengthError.isValid && yearLengthError.errorMessage) errors.year = yearLengthError.errorMessage;
      }
    }

    return errors;
  };

  const handleCardExpirationChange = (key: keyof CardExpiration, value: string) => {
    setCardExpiration((prev) => ({ ...prev, [key]: value }));
  };

  return { cardExpiration, handleCardExpirationChange, cardExpirationError: validateCardExpiration() };
}
