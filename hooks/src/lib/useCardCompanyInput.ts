import { useState } from 'react';

export function useCardCompanyInput() {
  const [cardCompany, setCardCompany] = useState('');
  const [error, setError] = useState<{ isValid: boolean; errorMessage: string }>({
    isValid: true,
    errorMessage: '',
  });

  function onChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    setCardCompany(value);
    setError({
      isValid: true,
      errorMessage: '',
    });
  }

  return {
    cardCompany,
    onChangeHandler,
    error,
  };
}
