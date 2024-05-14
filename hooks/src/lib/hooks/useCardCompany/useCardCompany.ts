import { useState } from 'react';

export const CARD_COMPANY_ERROR_MESSAGES = {
  NO_CARD_COMPANY: '회사를 선택해 주세요.',
  INVALID_CARD_COMPANY: '올바른 카드사가 아닙니다.',
};

const useCardCompany = (validCardCompanyList: string[], initialSelected: string = '') => {
  const [cardCompany, setCardCompany] = useState(initialSelected);
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
    setIsValidCardCompany(errorMessage === '');

    if (errorMessage === '') setCardCompany(company);
  };

  return {
    cardCompany,
    isValidCardCompany,
    cardCompanyErrorMessage,
    handleCardCompanyChange,
  };
};

export default useCardCompany;
