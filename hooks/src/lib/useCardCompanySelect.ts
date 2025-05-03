import { CardCompany } from './types/card';
import createCardField from './utils/createCardFieldHook';

export function useCardCompanySelect() {
  const { value, handleChange } = createCardField<CardCompany | ''>('', []);

  return { cardCompany: value, handleSelectChange: handleChange };
}
