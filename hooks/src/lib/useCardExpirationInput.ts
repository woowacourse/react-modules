import { useState } from 'react';
import { CardExpiration } from './types/card';
import { validateMonthRangeError, validateNumberError, validateYearLengthError } from './utils/cardInputValidations';
import { CARD_EXPIRATION_KEYS, INITIAL_CARD_EXPIRATION } from './constants/card';

export function useCardExpirationInput() {
  const [cardExpiration, setCardExpiration] = useState<CardExpiration>(INITIAL_CARD_EXPIRATION);

  const validateCardExpiration = () => {
    const errors: CardExpiration = {
      month: '',
      year: '',
    };

    for (const key of CARD_EXPIRATION_KEYS) {
      const value = cardExpiration[key];
      if (value === '') continue;

      if (key === 'month') {
        const numErr = validateNumberError(value);
        if (!numErr.isValid && numErr.errorMessage) {
          errors.month = numErr.errorMessage;
          continue;
        }
        const rangeErr = validateMonthRangeError(value);
        if (!rangeErr.isValid && rangeErr.errorMessage) {
          errors.month = rangeErr.errorMessage;
        }
      }

      if (key === 'year') {
        const numErr = validateNumberError(value);
        if (!numErr.isValid && numErr.errorMessage) {
          errors.year = numErr.errorMessage;
          continue;
        }
        const lengthErr = validateYearLengthError(value);
        if (!lengthErr.isValid && lengthErr.errorMessage) {
          errors.year = lengthErr.errorMessage;
        }
      }
    }

    return errors;
  };

  const handleCardExpirationChange = (key: keyof CardExpiration, value: string) => {
    setCardExpiration((prev) => ({ ...prev, [key]: value }));
  };

  return { cardExpiration, handleCardExpirationChange, cardExpirationError: validateCardExpiration() };
}
