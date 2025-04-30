import { ChangeEvent, useState } from 'react';

function useCVC() {
  const [CVC, setCVC] = useState('');

  const [isValid, setIsValid] = useState(true);

  const [errorMessage, setErrorMessage] = useState('');

  const checkIsNumber = (value: string) => {
    const regex = /^[0-9]*$/;
    return regex.test(value);
  };

  const checkIsValidLength = (value: string) => {
    return value.length === 3;
  };

  const validateCVC = (value: string) => {
    const isNumber = checkIsNumber(value);
    const isValidLength = checkIsValidLength(value);

    if (!isNumber) {
      setIsValid(false);
      setErrorMessage('숫자만 입력해주세요.');
      return;
    }

    if (!isValidLength) {
      setIsValid(false);
      setErrorMessage('CVC는 세 자리만 입력해야 합니다.');
      return;
    }

    setIsValid(true);
    setErrorMessage('');
  };

  const handleCVCChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCVC(value);
  };

  return {
    CVC,
    isValid,
    errorMessage,
    validateCVC,
    handleCVCChange,
  };
}

export default useCVC;
