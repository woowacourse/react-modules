import { useState } from 'react';
export interface IErrorStatus {
  isValid: boolean;
  errorMessage: string | null;
}
interface IValidationResult<T> {
  errorStatus: IErrorStatus;
  validate: (value: T) => void;
}

type ErrorMessage = string;
type IValidationFunction<T> = (value: T) => ErrorMessage | null | undefined;

function useValidation<T>(
  validators: IValidationFunction<T>[]
): IValidationResult<T> {
  const [errorMessage, setErrorMessage] = useState<ErrorMessage | null>(null);

  const validate = (value: T) => {
    const foundErrorMessage = validators.reduce(
      (acc: ErrorMessage | null, fn) => {
        const currentErrorMessage = fn(value) ?? null;
        return acc ?? currentErrorMessage;
      },
      null
    );

    setErrorMessage(foundErrorMessage);
  };

  return {
    errorStatus: { isValid: errorMessage === null, errorMessage },
    validate,
  };
}

export default useValidation;
