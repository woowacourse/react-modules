import { useState } from 'react';

const useCardCVC = () => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCVCValidate = (input: string) => {
    if (!validateCVC(input)) return;
    setIsValid(true);
    setErrorMessage('');
  };

  const validateCVC = (input: string) => {
    if (Number.isNaN(Number(input))) {
      setIsValid(false);
      setErrorMessage('숫자만 입력해 주세요.');
      return false;
    }
    if (input.length !== 3) {
      setIsValid(false);
      setErrorMessage('3글자의 숫자를 입력해 주세요.');
      return false;
    }

    return true;
  };

  return { handleCVCValidate, isValid, errorMessage };
};

export default useCardCVC;
