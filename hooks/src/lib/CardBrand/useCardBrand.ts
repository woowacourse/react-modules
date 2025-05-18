import { useState } from 'react';

import useCardBrandValidate from './useCardBrandValidate';

export type UseCardBrandResult = {
  cardBrand: string | null;
  errorMessage: string | null;
  handleBrandSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const useCardBrand = (cardBrands: string[]): UseCardBrandResult => {
  const [cardBrand, setCardBrand] = useState<string | null>(null);
  const { errorMessage, validateCardBrand } = useCardBrandValidate(cardBrands);

  const handleBrandSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const brand = e.target.value;

    setCardBrand(brand);
    validateCardBrand(brand);
  };

  return { cardBrand, errorMessage, handleBrandSelect };
};

export default useCardBrand;
