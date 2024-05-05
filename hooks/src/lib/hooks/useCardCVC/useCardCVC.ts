import { useState } from 'react';
import { getNumberErrorMessage, isNotNumber } from '../../utils/validation/validation';

export const VALID_CVC_NUMBER_LENGTH = 3;

const useCardCVC = (validLength: number = VALID_CVC_NUMBER_LENGTH, initialCVCNumber: string = '') => {
  const [cvcNumber, setCVCNumber] = useState(initialCVCNumber);
  const [isValidCVCNumber, setIsValidCVCNumber] = useState(false);
  const [cvcNumberErrorMessage, setCVCNumberErrorMessage] = useState('');

  const handleCVCNumberChange = (number: string) => {
    if (number.length > validLength) return;

    const errorMessage = getNumberErrorMessage(number, validLength);
    setCVCNumberErrorMessage(errorMessage);

    if (isNotNumber(number)) return;

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
