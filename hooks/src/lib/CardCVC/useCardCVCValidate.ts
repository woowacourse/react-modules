import { useState } from 'react';
import validateMaxLength from '../utils/validateMaxLength';
import validateNumber from '../utils/validateNumber';
import { ERROR_MESSAGE } from '../constants/errorMessage';

export type CardCVCValidateResult = {
  errorMessage: string | null;
  validateCardCVC: (cardCVC: string) => void;
  validateCardCVCBlur: (cardCVC: string) => void;
};

const useCardCVCValidate = (): CardCVCValidateResult => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardCVC = (cardCVC: string) => {
    if (!validateNumber(cardCVC)) {
      setErrorMessage(ERROR_MESSAGE.INVALID_NUMBER);
      return;
    }

    if (!validateMaxLength(cardCVC, 3)) {
      setErrorMessage(ERROR_MESSAGE.INVALID_CVC_LENGTH);
      return;
    }

    setErrorMessage(null);
  };

  const validateCardCVCBlur = (cardCVC: string) => {
    if (cardCVC.length < 3) {
      setErrorMessage(ERROR_MESSAGE.INVALID_CVC_LENGTH);
      return;
    }
  };

  return { errorMessage, validateCardCVC, validateCardCVCBlur };
};

export default useCardCVCValidate;
