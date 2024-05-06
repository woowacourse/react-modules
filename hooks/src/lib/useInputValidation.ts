import { useState } from "react";

export interface UseInputValidationReturn {
  value: string;
  errorStatus: IErrorStatus;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setValueWithValidation: (value: string) => void;
  validateOnBlur: (value: string) => void;
}

export function useInputValidation(validator: {
  onChange: Validator;
  onBlur: Validator;
}): UseInputValidationReturn {
  const [value, setValue] = useState("");
  const [errorStatus, setErrorStatus] = useState<IErrorStatus>({
    isError: false,
    errorMessage: null,
  });

  const setValueWithValidation = (value: string) => {
    const errorStatus = validator.onChange(value);
    setErrorStatus(errorStatus);

    if (!errorStatus.isError) {
      setValue(value);
    }
  };

  const validateOnBlur = (value: string) => {
    const errorStatus = validator.onBlur(value);
    setErrorStatus(errorStatus);
  };

  return {
    value,
    errorStatus,
    setValue,
    setValueWithValidation,
    validateOnBlur,
  };
}

export type IErrorStatus =
  | { isError: false; errorMessage: null }
  | { isError: true; errorMessage: string };

type Validator = (value: string) => IErrorStatus;
