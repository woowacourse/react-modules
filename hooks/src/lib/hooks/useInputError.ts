import { useState, useMemo } from 'react';
import { CheckValidationType, UseInputErrorProps } from '../types/types';
import { findFirstError } from '../../utils';
import { NO_ERROR } from '../constants/message';

export default function useInputError<T extends Record<string, string>>({
  initError,
  getValidationFns,
}: UseInputErrorProps<T>) {
  const [error, setError] = useState(initError);

  const firstError = useMemo(() => findFirstError(error), [error]);

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

  function getErrorMessage() {
    return firstError?.value;
  }

  function isError() {
    return !!firstError;
  }

  function resetErrors() {
    setError(initError);
  }

  return { error, checkValidation, getErrorMessage, isError, resetErrors };
}
