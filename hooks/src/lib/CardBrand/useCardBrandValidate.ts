import { useState } from 'react';

export type CardBrandValidateResult = {
  isValid: boolean;
  errorMessage: string | null;
  validateCardBrand: (cardBrand: string) => void;
};

const useCardBrandValidate = (
  cardBrands: string[]
): CardBrandValidateResult => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardBrand = (cardBrand: string) => {
    if (!cardBrands.includes(cardBrand)) {
      setIsValid(false);
      setErrorMessage('카드 브랜드가 올바르지 않습니다.');
      return;
    }

    setIsValid(true);
    setErrorMessage(null);
  };

  return { isValid, errorMessage, validateCardBrand };
};

export default useCardBrandValidate;
