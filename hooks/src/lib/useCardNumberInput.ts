import { useState } from 'react';
import { CardNumber } from './types/card';
import { validateNumberError } from './utils/cardInputValidations';

export function useCardNumberInput() {
  const [cardNumbers, setCardNumbers] = useState<CardNumber>({ first: '', second: '', third: '', fourth: '' });

  const validateCardNumber = () => {
    for (const key of ['first', 'second', 'third', 'fourth'] as const) {
      const value = cardNumbers[key];

      if (value === '') continue;

      const { isValid, errorMessage } = validateNumberError(value);
      if (!isValid) return errorMessage;

      if (value.length !== 4) return '4자리 숫자를 입력해주세요.';
    }
    return '';
  };

  const handleCardNumberChange = (key: keyof CardNumber, value: string) => {
    setCardNumbers((prev) => ({ ...prev, [key]: value }));
  };

  return { cardNumbers, handleCardNumberChange, cardNumberError: validateCardNumber() };
}
