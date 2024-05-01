import { useState } from 'react';
import { isNotNumber, isValidNumberLength } from '../utils/validation';

const ERROR_MESSAGES = {
  NOT_NUMBER: '숫자를 입력해주세요.',
  MAX_LENGTH: (length: number) => `${length}개의 숫자를 입력해주세요.`,
};

const useCardCVC = (validLength: number) => {
  const [cvcNumber, setCVCNumber] = useState('');
  const [isValidCVCNumber, setIsValidCVCNumber] = useState(false);
  const [cvcNumberErrorMessage, setCVCNumberErrorMessage] = useState('');

  const getErrorMessage = (number: string) => {
    if (isNotNumber(number)) {
      return ERROR_MESSAGES.NOT_NUMBER;
    }

    if (isValidNumberLength(number, 3)) {
      return ERROR_MESSAGES.MAX_LENGTH(validLength);
    }

    return '';
  };

  const handleCVCNumberChange = (number: string) => {
    const errorMessage = getErrorMessage(number);

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
