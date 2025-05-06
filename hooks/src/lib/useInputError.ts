import { useState } from 'react';
import { NO_ERROR } from './constants';
import { CheckValidationType, UseInputErrorProps } from './types';

export default function useInputError<T extends Record<string, string>>({
  initError,
  getValidationFns,
}: UseInputErrorProps<T>) {
  const [error, setError] = useState(initError);

  function checkValidation({ value, type }: CheckValidationType<T>) {
    const validationFns = getValidationFns(value);
    const validation = validationFns.find((v) => v.condition());
    setError((prev: T) => {
      return {
        ...prev,
        [type]: validation ? validation.errorMsg : NO_ERROR,
      };
    });
  }

  function findFirstError(errorObj: Record<string, string>) {
    for (const key in errorObj) {
      const typedKey = key as keyof typeof errorObj;
      if (errorObj[typedKey] !== NO_ERROR) {
        return { key: typedKey, value: errorObj[typedKey] };
      }
    }
    return null;
  }

  function getErrorMessage() {
    const result = findFirstError(error);
    return result?.value;
  }

  function isError() {
    return !!findFirstError(error);
  }

  function resetErrors() {
    setError(initError);
  }

  return { error, checkValidation, getErrorMessage, isError, resetErrors };
}
