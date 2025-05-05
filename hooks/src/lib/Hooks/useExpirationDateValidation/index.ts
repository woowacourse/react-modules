import { useState } from 'react';
import { validateExpirationDate } from '../../utils/validation';
import checkNoError from '../../utils/checkNoError';
import {
  ErrorMessageType,
  ExpirationDateErrors,
  ExpirationDateInputs,
  ExpirationDateValidationReturnType,
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

  const onChange =
    (type: keyof ExpirationDateInputs) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputStates((prev) => ({ ...prev, [type]: value }));

      const { error, message } = validateExpirationDate[type](value);

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
