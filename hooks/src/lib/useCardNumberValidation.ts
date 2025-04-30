import { useState } from 'react';

const useCardNumberValidation = () => {
  const [errors, setErrors] = useState([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState('');

  const validateInput = (index: number, value: string) => {
    //숫자를 체크한다. => error => true, false 반환 / message

    const isNumber = (value: string) => {
      const error = !/^[0-9]*$/.test(value);

      if (error) return { error, message: '숫자만 입력 가능합니다.' };
      return { error, message: '' };
    };

    const { error, message } = isNumber(value);

    //상태 업데이트 errors, errorMessage
    setErrors((prev) => {
      const updated = [...prev];
      updated[index] = error;
      return updated;
    });

    setErrorMessage(message);
  };

  const checkNoError = (errors: boolean | boolean[]) => {
    if (Array.isArray(errors)) return errors.every((error) => error === false);

    return errors === false;
  };

  // noErrors 라는 변수
  const noError = checkNoError(errors);

  return {
    errors,
    errorMessage,
    validateInput,
    noError,
  };
};

export default useCardNumberValidation;
