import { useState } from 'react';
import { getNumberErrorMessage, isNotNumber } from '../../utils/validation/validation';

export const VALID_CVC_NUMBER_LENGTH = 3;

type useCardCVCType = {
  validLength?: number;
  initialCVCNumber?: string;
};

const useCardCVC = ({ validLength = VALID_CVC_NUMBER_LENGTH, initialCVCNumber = '' }: useCardCVCType = {}) => {
  const [cvcNumber, setCVCNumber] = useState(initialCVCNumber);
  const [isValidCVCNumber, setIsValidCVCNumber] = useState(false);
  const [cvcNumberErrorMessage, setCVCNumberErrorMessage] = useState('');

  const handleCVCNumberChange = (number: string) => {
    if (number.length > validLength) return; // 입력이 초과로 들어오는 경우 오류 메세지 없이 그냥 무시

    const errorMessage = getNumberErrorMessage(number, validLength);

    if (isNotNumber(number)) {
      setCVCNumberErrorMessage(errorMessage);
      return;
    }

    setCVCNumberErrorMessage(errorMessage);
    setIsValidCVCNumber(errorMessage === '');
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
