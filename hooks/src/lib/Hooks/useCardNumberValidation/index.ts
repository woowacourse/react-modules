import { useState } from 'react';
import { isNumber } from '../../utils/validation';
import checkNoError from '../../utils/checkNoError';
import {
  ErrorMessageType,
  ListErrorType,
  ValidationHookReturnType,
  ValidInputFuncType,
} from '../../types';

const useCardNumberValidation = (): ValidationHookReturnType => {
  const [errors, setErrors] = useState<ListErrorType>([
    false,
    false,
    false,
    false,
  ]);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>('');

  const validateInput: ValidInputFuncType = (value: string, index: number) => {
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
