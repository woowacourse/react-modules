import { useState } from 'react';
import { isNumber } from '../../utils/validation';
import checkNoError from '../../utils/checkNoError';
import {
  ErrorMessageType,
  SingleErrorType,
  CurriedInputChangeHandler,
  ValidationHookReturnType,
} from '../../types';

const useCvcNumberValidation = (): ValidationHookReturnType => {
  const [inputStates, setInputStates] = useState<string>('');
  const [errors, setErrors] = useState<SingleErrorType>(false);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>('');

  const onChange: CurriedInputChangeHandler = () => (e) => {
    const value = e.target.value;
    setInputStates(value);

    const { error, message } = isNumber(value);
    setErrors(error);
    setErrorMessage(message);
  };

  const noError = checkNoError(errors);

  return {
    inputStates,
    errorMessage,
    onChange,
    noError,
  };
};

export default useCvcNumberValidation;
