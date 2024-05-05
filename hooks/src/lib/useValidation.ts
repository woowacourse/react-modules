import { useState } from "react";

interface IUseValidationReturn {
  errorStatus: IErrorStatus;
  validateValue: (value: string) => void;
}

export default function useValidation(validator: Validator): IUseValidationReturn {
  const [errorStatus, setErrorStatus] = useState<IErrorStatus>({
    isError: false,
    errorMessage: null,
  });

  const validateValue = (value: string) => {
    setErrorStatus(validator(value));
  };

  return {
    errorStatus,
    validateValue,
  };
}

export type IErrorStatus =
  | { isError: false; errorMessage: null }
  | { isError: true; errorMessage: string };

type Validator = (value: string) => IErrorStatus;
