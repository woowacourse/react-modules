import { useState } from 'react';
import validateNumber from '../utils/validateNumber';
import validateMaxLength from '../utils/validateMaxLength';

const useCardPasswordValidate = () => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardPassword = (cardPassword: string) => {
    if (!validateNumber(cardPassword)) {
      setIsValid(false);
      setErrorMessage('숫자만 입력해주세요.');
      return;
    }

    if (!validateMaxLength(cardPassword, 2)) {
      setIsValid(false);
      setErrorMessage('2자리만 입력해주세요.');
      return;
    }

    setIsValid(true);
    setErrorMessage(null);
  };

  return { isValid, errorMessage, validateCardPassword };
};

export default useCardPasswordValidate;
