import { useState } from 'react';
import validateNumber from '../utils/validateNumber';
import validateMaxLength from '../utils/validateMaxLength';
import { ERROR_MESSAGE } from '../constants/errorMessage';
export type CardPasswordValidateResult = {
  errorMessage: string | null;
  validateCardPassword: (cardPassword: string) => void;
  validateCardPasswordBlur: (cardPassword: string) => void;
};

const useCardPasswordValidate = (): CardPasswordValidateResult => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardPassword = (cardPassword: string) => {
    if (!validateNumber(cardPassword)) {
      setErrorMessage(ERROR_MESSAGE.INVALID_NUMBER);
      return;
    }

    if (!validateMaxLength(cardPassword, 2)) {
      setErrorMessage(ERROR_MESSAGE.INVALID_LENGTH);
      return;
    }

    setErrorMessage(null);
  };

  const validateCardPasswordBlur = (cardPassword: string) => {
    if (cardPassword.length < 2) {
      setErrorMessage(ERROR_MESSAGE.INVALID_LENGTH);
      return;
    }
  };

  return { errorMessage, validateCardPassword, validateCardPasswordBlur };
};

export default useCardPasswordValidate;
