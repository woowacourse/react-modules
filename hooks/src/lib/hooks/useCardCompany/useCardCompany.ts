import { useState } from 'react';

export const CARD_COMPANY_ERROR_MESSAGES = {
  NO_CARD_COMPANY: 'NO_CARD_COMPANY',
  INVALID_CARD_COMPANY: 'INVALID_CARD_COMPANY',
};

const useCardCompany = (validCardCompanyList: string[], initialValue: string = '') => {
  const [cardCompany, setCardCompany] = useState(initialValue);
  const [isValidCardCompany, setIsValidCardCompany] = useState(false);
  const [cardCompanyErrorMessage, setCardCompanyErrorMessage] = useState('');

  const getErrorMessage = (company: string) => {
    if (company === '') return CARD_COMPANY_ERROR_MESSAGES.NO_CARD_COMPANY;
    if (!validCardCompanyList.includes(company)) return CARD_COMPANY_ERROR_MESSAGES.INVALID_CARD_COMPANY;

    return '';
  };

  const handleCardCompanyChange = (company: string) => {
    const errorMessage = getErrorMessage(company);

    setCardCompanyErrorMessage(errorMessage);
    setIsValidCardCompany(!errorMessage);

    if (!errorMessage) return;

    setCardCompany(company);
  };

  return {
    cardCompany,
    isValidCardCompany,
    cardCompanyErrorMessage,
    handleCardCompanyChange,
  };
};

export default useCardCompany;
