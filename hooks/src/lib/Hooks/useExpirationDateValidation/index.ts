import { useState } from 'react';
import { isExpirationDate } from '../../utils/validation';
import checkNoError from '../../utils/checkNoError';
import {
  ErrorMessageType,
  ListErrorType,
  CurriedInputChangeHandler,
  ValidationHookReturnType,
} from '../../types';

const useExpirationDateValidation = (
  format: number[] = [2, 2]
): ValidationHookReturnType => {
  const [inputStates, setInputStates] = useState<string[]>(
    format.map(() => '')
  );
  const [errors, setErrors] = useState<ListErrorType>(format.map(() => false));
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>('');

  const onChange: CurriedInputChangeHandler =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      const updatedValues = [...inputStates];
      updatedValues[index] = value;
      setInputStates(updatedValues);

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
    inputStates,
    errorMessage,
    onChange,
    noError,
  };
};

export default useExpirationDateValidation;
