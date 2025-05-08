import { useState } from 'react';
import { validateCVC } from './validator/validateCardInput';
import { getFirstErrorMessage } from './validator/getFirstErrorMessage';

export function useCardCVCInput() {
  const [cardCVC, setCardCVC] = useState('');
  const [error, setError] = useState<{ isValid: boolean; errorMessage: string }>({
    isValid: true,
    errorMessage: '',
  });

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setCardCVC(value);
    const errorResult = validateCVC(value);
    const errorMessage = getFirstErrorMessage(errorResult, 'CVC');

    setError({
      isValid: !errorMessage,
      errorMessage: errorMessage || '',
    });
  }

  return {
    cardCVC,
    onChangeHandler,
    error,
  };
}
