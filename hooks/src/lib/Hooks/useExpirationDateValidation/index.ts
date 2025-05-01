import { useState } from 'react';
import { isExpirationDate } from '../../utils/validation';
import checkNoError from '../../utils/checkNoError';

const useExpirationDateValidation = () => {
  const [errors, setErrors] = useState([false, false]);
  const [errorMessage, setErrorMessage] = useState('');

  const validateInput = (index: number, value: string) => {
    const inputType = index === 0 ? 'month' : 'year';
    const { error, message } = isExpirationDate(inputType, value);

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

export default useExpirationDateValidation;
