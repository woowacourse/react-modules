import { useState } from 'react';
import { isExpirationDate } from '../../utils/validation';
import checkNoError from '../../utils/checkNoError';
import {
  ErrorMessageType,
  ListErrorType,
  ValidationHookReturnType,
  ValidInputFuncType,
} from '../../types';

const useExpirationDateValidation = (): ValidationHookReturnType => {
  const [errors, setErrors] = useState<ListErrorType>([false, false]);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>('');

  const validateInput: ValidInputFuncType = (value: string, index: number) => {
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
