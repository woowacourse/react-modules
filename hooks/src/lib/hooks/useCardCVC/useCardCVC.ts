import { useState } from 'react';
import { getNumberErrorMessage, isNotNumber } from '../../utils/validation/validation';

export const CVC_DEFAULT_LENGTH = 3;

const useCardCVC = (validLength: number = CVC_DEFAULT_LENGTH, initialValue: string = '') => {
  const [cvcNumber, setCVCNumber] = useState(initialValue);
  const [isValidCVCNumber, setIsValidCVCNumber] = useState(false);
  const [cvcNumberErrorMessage, setCVCNumberErrorMessage] = useState('');

  const validateCVC = (number: string) => {
    const errorMessage = getNumberErrorMessage(number, validLength);

    setCVCNumberErrorMessage(errorMessage);
    setIsValidCVCNumber(!errorMessage);
  };

  const handleCVCNumberChange = (number: string) => {
    if (number.length > validLength) return;

    validateCVC(number);

    if (isNotNumber(number)) return;

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
