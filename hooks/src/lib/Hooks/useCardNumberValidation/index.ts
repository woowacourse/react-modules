import { useState } from 'react';
import { validateNumericString } from '../../utils/validation';
import checkNoError from '../../utils/checkNoError';
import {
  ErrorMessageType,
  ListErrorType,
  CurriedInputChangeHandler,
  ValidationHookReturnType,
  ValidateFuncReturnType,
} from '../../types';

const useCardNumberValidation = (
  format: number[] = [4, 4, 4, 4]
): ValidationHookReturnType => {
  const [inputStates, setInputStates] = useState<string[]>(
    format.map(() => '')
  );
  const [errors, setErrors] = useState<ListErrorType>(format.map(() => false));
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>('');

  const validateCardNumber = (
    value: string,
    maxLength: number
  ): ValidateFuncReturnType => {
    const numberCheck = validateNumericString(value);
    if (numberCheck.error) return numberCheck;

    const lengthCheck = value.length !== maxLength;
    if (lengthCheck) {
      return {
        error: true,
        message: '올바른 길이의 숫자를 입력해주세요.',
      };
    }

    return { error: false, message: '' };
  };

  const onChange: CurriedInputChangeHandler =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      const updatedValues = [...inputStates];
      updatedValues[index] = value;
      setInputStates(updatedValues);

      const { error, message } = validateCardNumber(value, format[index]);

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
