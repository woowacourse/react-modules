import { useState } from 'react';
import { validateNumericString } from '../../utils/validation';
import checkNoError from '../../utils/checkNoError';
import {
  ErrorMessageType,
  SingleErrorType,
  CurriedInputChangeHandler,
  ValidationHookReturnType,
  ValidateFuncReturnType,
} from '../../types';

const useCvcNumberValidation = (): ValidationHookReturnType => {
  const [inputStates, setInputStates] = useState<string>('');

  const validateCvcNumber = (value: string): ValidateFuncReturnType => {
    if (value === '') return { error: false, message: '' };

    const numberCheck = validateNumericString(value);
    if (numberCheck.error) return numberCheck;

    const lengthCheck = value.length !== 3;
    if (lengthCheck) {
      return {
        error: true,
        message: '올바른 길이의 숫자를 입력해주세요.',
      };
    }

    return { error: false, message: '' };
  };

  const {
    error,
    message,
  }: { error: SingleErrorType; message: ErrorMessageType } =
    validateCvcNumber(inputStates); //inputState 바뀌면 자동 계산

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

export default useCvcNumberValidation;
