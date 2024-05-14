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

  const updateErrorMessage = (cvcNumber: string, validLength: number) => {
    const errorMessage = getNumberErrorMessage(cvcNumber, validLength);
    setCVCNumberErrorMessage(errorMessage);

    return errorMessage;
  };

  const updateValidation = (errorMessage: string) => {
    setIsValidCVCNumber(errorMessage === '');
  };

  const handleCVCNumberChange = (cvcNumber: string) => {
    if (cvcNumber.length > validLength) return; // 입력이 초과로 들어오는 경우 오류 메세지 없이 그냥 무시

    const errorMessage = updateErrorMessage(cvcNumber, validLength);
    updateValidation(errorMessage);

    if (isNotNumber(cvcNumber)) return;

    setCVCNumber(cvcNumber);
  };

  return {
    cvcNumber,
    isValidCVCNumber,
    cvcNumberErrorMessage,
    handleCVCNumberChange,
  };
};

export default useCardCVC;
