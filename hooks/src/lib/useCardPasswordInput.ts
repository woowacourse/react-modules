import { useState } from 'react';
import { validatePassword } from './validator/validateCardInput';
import { getFirstErrorMessage } from './validator/getFirstErrorMessage';

export function useCardPasswordInput() {
  const [cardPassword, setCardPassword] = useState('');
  const [error, setError] = useState<{ isValid: boolean; errorMessage: string }>({
    isValid: true,
    errorMessage: '',
  });

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    const errorResult = validatePassword(value);
    const errorMessage = getFirstErrorMessage(errorResult, 'PASSWORD');

    setError({
      isValid: !errorMessage,
      errorMessage: errorMessage || '',
    });

    setCardPassword(value);
  }

  return {
    cardPassword,
    onChangeHandler,
    error,
  };
}
