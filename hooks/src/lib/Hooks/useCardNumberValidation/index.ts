import { useState } from 'react';
import { isNumber } from '../../utils/validation';
import checkNoError from '../../utils/checkNoError';
import {
  ErrorMessageType,
  ListErrorType,
  CurriedInputChangeHandler,
  ValidationHookReturnType,
} from '../../types';

const useCardNumberValidation = (
  format: number[] = [4, 4, 4, 4]
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
    inputStates,
    errorMessage,
    onChange,
    noError,
  };
};

export default useCardNumberValidation;
