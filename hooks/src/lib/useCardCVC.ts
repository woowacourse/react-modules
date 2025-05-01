import { useState } from 'react';
import { validateCVC } from './validator/validateCardInput';
import { getFirstErrorMessage } from './validator/getFirstErrorMessage';

export function useCardCVCInput() {
  const [cardCVC, setCardCVC] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setCardCVC(value);
    const errorResult = validateCVC(value);
    setErrorMessage(getFirstErrorMessage(errorResult, 'CVC'));
  }

  return {
    cardCVC,
    onChangeHandler,
    errorMessage,
  };
}
