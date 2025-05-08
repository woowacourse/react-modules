import { useState } from 'react';

export function useCardCompanyInput() {
  const [cardCompany, setCardCompany] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function onChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    setCardCompany(value);
    setErrorMessage('');
  }

  return {
    cardCompany,
    onChangeHandler,
    errorMessage,
  };
}
