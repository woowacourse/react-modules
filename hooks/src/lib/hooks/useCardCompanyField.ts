import { useState } from 'react';
import { CardCompany } from '../types/card';

export function useCardCompanyField() {
  const [cardCompany, setCardCompany] = useState<CardCompany | ''>('');
  const handleSelectChange = (value: CardCompany) => {
    setCardCompany(value);
  };

  return { cardCompany, handleSelectChange };
}
