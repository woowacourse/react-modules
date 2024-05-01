import { useState } from 'react';
import { getNumberErrorMessage, isNotNumber } from '../../utils/validation/validation';

export const VALID_CVC_NUMBER_LENGTH = 3;

const useCardCVC = () => {
  const [cvcNumber, setCVCNumber] = useState('');
  const [isValidCVCNumber, setIsValidCVCNumber] = useState(false);
  const [cvcNumberErrorMessage, setCVCNumberErrorMessage] = useState('');

  const handleCVCNumberChange = (number: string) => {
    if (isNotNumber(number) || number.length > VALID_CVC_NUMBER_LENGTH) return;

    const errorMessage = getNumberErrorMessage(number, VALID_CVC_NUMBER_LENGTH);

    setCVCNumberErrorMessage(errorMessage);
    setIsValidCVCNumber(!errorMessage);
    setCVCNumber(number);
  };

  return {
    cvcNumber,
    isValidCVCNumber,
    cvcNumberErrorMessage,
    handleCVCNumberChange,
  };
};

export default useCardCVC;
