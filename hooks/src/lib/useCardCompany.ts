import { useState, ChangeEvent } from 'react';
import { validateCardCompany } from './validators/validateCardCompany';

const useCardCompany = () => {
  const [cardCompanyInfo, setCardCompanyInfo] = useState({
    cardCompany: '',
    errorMessage: '',
  });
  const handleCardCompany = (
    event: ChangeEvent<HTMLSelectElement>,
    defaultValue: string,
  ) => {
    const { value } = event.target;
    const message = validateCardCompany(value, defaultValue);

    setCardCompanyInfo({
      cardCompany: value,
      errorMessage: message,
    });
  };

  return {
    cardCompanyInfo,
    handleCardCompany,
  };
};

export default useCardCompany;
