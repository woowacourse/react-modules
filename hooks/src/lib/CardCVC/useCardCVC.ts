import { useState } from 'react';

import useCardCVCValidate from './useCardCVCValidate';

export type CardCVCResult = {
  cvc: string;
  errorMessage: string | null;
  handleCvcChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useCardCVC = (): CardCVCResult => {
  const [cvc, setCvc] = useState('');
  const { errorMessage, validateCardCVC } = useCardCVCValidate();

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(e.target.value);
    validateCardCVC(e.target.value);
  };

  return { cvc, errorMessage, handleCvcChange };
};

export default useCardCVC;
