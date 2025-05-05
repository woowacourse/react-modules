import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { validateCardNumber } from './validator/validateCardInput';
import { getFirstErrorMessage } from './validator/getFirstErrorMessage';

export function useCardNumbersInput() {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const index = Number(name);

    setCardNumbers(cardNumbers.map((num, i) => (i === index ? value : num)));

    const errorResult = validateCardNumber(value);
    setErrorMessage(getFirstErrorMessage(errorResult, 'NUMBER'));
  }

  return {
    cardNumbers,
    onChangeHandler,
    errorMessage,
  };
}
