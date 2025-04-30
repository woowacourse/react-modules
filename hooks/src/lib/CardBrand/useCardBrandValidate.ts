import { useState } from 'react';

const useCardBrandValidate = (cardBrands: string[]) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardBrand = (cardBrand: string) => {
    if (!cardBrands.includes(cardBrand)) {
      setIsValid(false);
      setErrorMessage('카드 브랜드가 올바르지 않습니다.');
    }

    setIsValid(true);
    setErrorMessage(null);
  };

  return { isValid, errorMessage, validateCardBrand };
};

export default useCardBrandValidate;
