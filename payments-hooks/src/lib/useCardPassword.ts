import { useState } from 'react';
import { validatePassword } from './validator/validateCardInput';
import { getFirstErrorMessage } from './validator/getFirstErrorMessage';

export function useCardPasswordInput() {
  const [cardPassword, setCardPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    const errorResult = validatePassword(value);
    setErrorMessage(getFirstErrorMessage(errorResult, 'PASSWORD'));
    setCardPassword(value);
  }

  return {
    cardPassword,
    onChangeHandler,
    errorMessage,
  };
}
