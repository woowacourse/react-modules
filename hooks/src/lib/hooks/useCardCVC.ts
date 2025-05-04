import { useState } from 'react';
import { validateCVC } from '../validation/validateCVC';

const useCardCVC = () => {
  const [cardCVC, setCardCVC] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCVCValidate = (input: string) => {
    if (!validateCVC({ input, setIsValid, setErrorMessage })) return;
    setIsValid(true);
    setErrorMessage('');
  };

  return { cardCVC, setCardCVC, handleCVCValidate, isValid, errorMessage };
};

export default useCardCVC;
