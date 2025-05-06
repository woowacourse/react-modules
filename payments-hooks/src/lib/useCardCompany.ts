import { useState } from 'react';

export function useCardCompanyInput() {
  const [cardCompany, setCardCompany] = useState('');
  const [errorMessage, _] = useState('');

  function onChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    setCardCompany(value);
  }

  return {
    cardCompany,
    onChangeHandler,
    errorMessage,
  };
}
