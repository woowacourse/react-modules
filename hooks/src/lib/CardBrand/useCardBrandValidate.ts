import { useState } from 'react';

type CardBrandValidateResult = {
  errorMessage: string | null;
  validateCardBrand: (cardBrand: string) => void;
};

const useCardBrandValidate = (
  cardBrands: string[]
): CardBrandValidateResult => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardBrand = (cardBrand: string) => {
    if (!cardBrands.includes(cardBrand)) {
      setErrorMessage('카드 브랜드가 올바르지 않습니다.');
      return;
    }

    setErrorMessage(null);
  };

  return { errorMessage, validateCardBrand };
};

export default useCardBrandValidate;
