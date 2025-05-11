import { useState } from 'react';
import validateNumber from '../utils/validateNumber';
import validateMaxLength from '../utils/validateMaxLength';

export type CardPasswordValidateResult = {
  errorMessage: string | null;
  validateCardPassword: (cardPassword: string) => void;
  validateCardPasswordBlur: (cardPassword: string) => void;
};

const useCardPasswordValidate = (): CardPasswordValidateResult => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardPassword = (cardPassword: string) => {
    if (!validateNumber(cardPassword)) {
      setErrorMessage('숫자만 입력해주세요.');
      return;
    }

    if (!validateMaxLength(cardPassword, 2)) {
      setErrorMessage('2자리만 입력해주세요.');
      return;
    }

    setErrorMessage(null);
  };

  const validateCardPasswordBlur = (cardPassword: string) => {
    if (cardPassword.length < 2) {
      setErrorMessage('2자리의 숫자를 입력해주세요.');
      return;
    }
  };

  return { errorMessage, validateCardPassword, validateCardPasswordBlur };
};

export default useCardPasswordValidate;
