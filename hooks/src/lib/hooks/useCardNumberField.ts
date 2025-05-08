import { useMemo, useState } from 'react';
import { CardNumber } from '../types/card';
import { validateNumberError } from '../utils/cardInputValidations';

export function useCardNumberField() {
  const [cardNumbers, setCardNumbers] = useState<CardNumber>({ first: '', second: '', third: '', fourth: '' });

  const cardNumberErrors = useMemo(() => {
    const errors = {
      first: '',
      second: '',
      third: '',
      fourth: '',
    };

    for (const key of ['first', 'second', 'third', 'fourth'] as const) {
      const value = cardNumbers[key];

      if (value === '') continue;

      const numError = validateNumberError(value);
      if (numError) {
        errors[key] = numError;
        continue;
      }

      if (value.length !== 4) {
        errors[key] = '4자리 숫자를 입력해주세요.';
      }
    }

    return errors;
  }, [cardNumbers]);

  const handleCardNumberChange = (key: keyof CardNumber, value: string) => {
    setCardNumbers((prev) => ({ ...prev, [key]: value }));
  };

  return { cardNumbers, handleCardNumberChange, cardNumberErrors };
}
