import { useState, ChangeEvent } from 'react';
import { validateCardCompany } from '../validators/newCardInputValidator';

const useCardCompany = () => {
  const [cardCompanyInfo, setCardCompanyInfo] = useState({
    cardCompany: '',
    isError: false,
  });
  const handleCardCompany = (
    event: ChangeEvent<HTMLSelectElement>,
    defaultValue: string,
  ) => {
    const { value } = event.target;
    const isError = validateCardCompany(value, defaultValue);

    if (isError) {
      setCardCompanyInfo({
        cardCompany: value,
        isError: true,
      });
      return;
    }

    setCardCompanyInfo({
      cardCompany: value,
      isError: false,
    });
  };

  return {
    cardCompanyInfo,
    handleCardCompany,
  };
};

export default useCardCompany;
