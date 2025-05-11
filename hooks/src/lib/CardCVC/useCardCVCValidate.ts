import { useState } from 'react';
import validateMaxLength from '../utils/validateMaxLength';
import validateNumber from '../utils/validateNumber';

export type CardCVCValidateResult = {
  errorMessage: string | null;
  validateCardCVC: (cardCVC: string) => void;
};

const useCardCVCValidate = (): CardCVCValidateResult => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardCVC = (cardCVC: string) => {
    if (!validateNumber(cardCVC)) {
      setErrorMessage('숫자만 입력해주세요.');
      return;
    }

    if (!validateMaxLength(cardCVC, 3)) {
      setErrorMessage('3자리만 입력해주세요.');
      return;
    }

    setErrorMessage(null);
  };

  return { errorMessage, validateCardCVC };
};

export default useCardCVCValidate;
