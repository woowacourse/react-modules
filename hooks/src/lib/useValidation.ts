import { useState } from "react";

export type IErrorStatus =
  | { isError: false; errorMessage: null }
  | { isError: true; errorMessage: string };

interface IUseValidationReturn<T> {
  errorStatus: IErrorStatus;
  validateValue: (value: T) => void;
}

type ValidationFunction<T> = (value: T) => IErrorStatus;

export default function useValidation<T>(
  validator: ValidationFunction<T>
): IUseValidationReturn<T> {
  const [errorStatus, setErrorStatus] = useState<IErrorStatus>({
    isError: false,
    errorMessage: null,
  });

  const validateValue = (value: T) => {
    setErrorStatus(validator(value));
  };

  return {
    errorStatus,
    validateValue,
  };
}
