import { useState } from 'react';
import { isNumber } from '../../utils/validation';
import checkNoError from '../../utils/checkNoError';
import {
  ErrorMessageType,
  SingleErrorType,
  ValidationHookReturnType,
  ValidInputFuncType,
} from '../../types';

const useCvcNumberValidation = (): ValidationHookReturnType => {
  const [errors, setErrors] = useState<SingleErrorType>(false);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>('');

  const validateInput: ValidInputFuncType = (value: string) => {
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

export default useCvcNumberValidation;
