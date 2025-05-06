import { ChangeEvent, useState } from 'react';

export const useCardCompany = () => {
  const [brand, setBrand] = useState<string | null>(null);

  const handleCardCompanyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedBrand = e.target.value;
    setBrand(selectedBrand || null);
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
