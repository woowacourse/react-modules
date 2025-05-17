import { useState } from 'react';

import { ERROR_MESSAGE } from '../constants/errorMessage';

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
      setErrorMessage(ERROR_MESSAGE.INVALID_CARD_BRAND);
      return;
    }

    setErrorMessage(null);
  };

  return { errorMessage, validateCardBrand };
};

export default useCardBrandValidate;
