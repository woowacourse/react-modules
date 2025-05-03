import { useState } from 'react';
import validateMaxLength from '../utils/validateMaxLength';
import validateNumber from '../utils/validateNumber';

export type CardCVCValidateResult = {
  isValid: boolean;
  errorMessage: string | null;
  validateCardCVC: (cardCVC: string) => void;
};

const useCardCVCValidate = (): CardCVCValidateResult => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardCVC = (cardCVC: string) => {
    if (!validateNumber(cardCVC)) {
      setIsValid(false);
      setErrorMessage('숫자만 입력해주세요.');
      return;
    }

    if (!validateMaxLength(cardCVC, 3)) {
      setIsValid(false);
      setErrorMessage('3자리만 입력해주세요.');
      return;
    }

    setIsValid(true);
    setErrorMessage(null);
  };

  return { isValid, errorMessage, validateCardCVC };
};

export default useCardCVCValidate;
