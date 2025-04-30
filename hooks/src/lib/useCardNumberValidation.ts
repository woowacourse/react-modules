import { useState } from 'react';
import { isNumber } from './utils/validation';
import checkNoError from './utils/checkNoError';

const useCardNumberValidation = () => {
  const [errors, setErrors] = useState([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState('');

  const validateInput = (index: number, value: string) => {
    const { error, message } = isNumber(value);

    setErrors((prev) => {
      const updated = [...prev];
      updated[index] = error;
      return updated;
    });

    setErrorMessage(message);
  };

  const noError = checkNoError(errors);

  return {
    errors,
    errorMessage,
    validateInput,
    noError,
  };
};

export default useCardNumberValidation;
