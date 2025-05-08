import { useState } from 'react';

export const useCardCompany = () => {
  const [brand, setBrand] = useState<string | null>(null);

  const handleCardCompanyChange = (value: string) => {
    setBrand(value || null);
  };

  const isBrandSelected = (): boolean => {
    return brand !== null;
  };

  return {
    brand,
    handleCardCompanyChange,
    isBrandSelected,
  };
};
