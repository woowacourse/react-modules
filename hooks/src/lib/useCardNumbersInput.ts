import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { validateCardNumber, validateFullCardNumber } from './validator/validateCardInput';
import { getFirstErrorMessage } from './validator/getFirstErrorMessage';

export function useCardNumbersInput() {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [error, setError] = useState<{ isValid: boolean; errorMessage: string }>({
    isValid: true,
    errorMessage: '',
  });

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const index = Number(name);

    setCardNumbers(cardNumbers.map((num, i) => (i === index ? value : num)));

    const errorResult = validateCardNumber(value) || validateFullCardNumber(cardNumbers.join(''));
    const errorMessage = getFirstErrorMessage(errorResult, 'NUMBER');

    setError({
      isValid: !errorMessage,
      errorMessage: errorMessage || '',
    });
  }

  return {
    cardNumbers,
    onChangeHandler,
    error,
  };
}
