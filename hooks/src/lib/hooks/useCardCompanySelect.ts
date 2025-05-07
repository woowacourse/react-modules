import { useState } from 'react';
import { CardCompany } from './types/card';

export function useCardCompanySelect() {
  const [cardCompany, setCardCompany] = useState<CardCompany | ''>('');
  const handleSelectChange = (value: CardCompany) => {
    setCardCompany(value);
  };

  return { cardCompany, handleSelectChange };
}
