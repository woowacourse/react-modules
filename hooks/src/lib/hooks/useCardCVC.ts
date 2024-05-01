import { useState } from 'react';
import { getNumberErrorMessage } from '../utils/validation';

const CVC_NUMBER_LENGTH = 3;

const useCardCVC = () => {
  const [cvcNumber, setCVCNumber] = useState('');
  const [isValidCVCNumber, setIsValidCVCNumber] = useState(false);
  const [cvcNumberErrorMessage, setCVCNumberErrorMessage] = useState('');

  const handleCVCNumberChange = (number: string) => {
    const errorMessage = getNumberErrorMessage(number, CVC_NUMBER_LENGTH);

    setCVCNumberErrorMessage(errorMessage);

    if (errorMessage !== '') return;

    setCVCNumber(number);
    setIsValidCVCNumber(true);
  };

  return {
    cvcNumber,
    isValidCVCNumber,
    cvcNumberErrorMessage,
    handleCVCNumberChange,
  };
};

export default useCardCVC;
