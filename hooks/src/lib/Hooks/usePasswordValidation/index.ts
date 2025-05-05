import { useState } from 'react';
import { validateNumericString } from '../../utils/validation';
import checkNoError from '../../utils/checkNoError';
import {
  ErrorMessageType,
  SingleErrorType,
  CurriedInputChangeHandler,
  ValidationHookReturnType,
} from '../../types';

const usePasswordValidation = (): ValidationHookReturnType => {
  const [inputStates, setInputStates] = useState<string>('');
  const {
    error,
    message,
  }: { error: SingleErrorType; message: ErrorMessageType } =
    validateNumericString(inputStates); //inputState 바뀌면 자동 계산

  const onChange: CurriedInputChangeHandler = () => (e) => {
    const value = e.target.value;
    setInputStates(value);
  };

  const noError = checkNoError(error);

  return {
    inputStates,
    errorMessage: message,
    onChange,
    noError,
  };
};

export default usePasswordValidation;
