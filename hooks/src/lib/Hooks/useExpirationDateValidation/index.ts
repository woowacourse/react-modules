import { useState } from 'react';
import { validateExpirationDate } from '../../utils/validation';
import checkNoError from '../../utils/checkNoError';
import {
  ErrorMessageType,
  ExpirationDateErrors,
  ExpirationDateInputs,
  ExpirationDateValidationReturnType,
  ValidateFuncReturnType,
} from '../../types';

const useExpirationDateValidation = (): ExpirationDateValidationReturnType => {
  const [inputStates, setInputStates] = useState<ExpirationDateInputs>({
    month: '',
    year: '',
  });
  const [errors, setErrors] = useState<ExpirationDateErrors>({
    month: false,
    year: false,
  });
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>('');

  const validateExpirationNumber = (
    type: keyof ExpirationDateInputs,
    value: string
  ): ValidateFuncReturnType => {
    const numberCheck = validateExpirationDate[type](value);
    if (numberCheck.error) return numberCheck;

    const lengthCheck = value.length !== 2;
    if (lengthCheck) {
      return {
        error: true,
        message: '올바른 길이의 숫자를 입력해주세요.',
      };
    }

    return { error: false, message: '' };
  };

  const onChange =
    (type: keyof ExpirationDateInputs) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputStates((prev) => ({ ...prev, [type]: value }));

      const { error, message } = validateExpirationNumber(type, value);

      setErrors((prev) => ({ ...prev, [type]: error }));
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

export default useExpirationDateValidation;
