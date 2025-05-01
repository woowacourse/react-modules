import { useState } from 'react';
import { isNumber } from '../../utils/validation';
import checkNoError from '../../utils/checkNoError';

const usePasswordValidation = () => {
  const [errors, setErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateInput = (value: string) => {
    const { error, message } = isNumber(value);

    setErrors(error);
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

export default usePasswordValidation;
