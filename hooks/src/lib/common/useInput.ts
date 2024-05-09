import { ErrorStatus } from "@/types/errorStatus";
import { useState, ChangeEvent } from "react";

export type ValidateType = (value: string) => {
  isValid: boolean;
  error: ErrorStatus;
};
interface Props {
  initialValue: string;
  validates: ValidateType[];
  validLength?: number;
}

const useInput = <T>({ initialValue = "", validates, validLength }: Props) => {
  const [value, setValue] = useState(initialValue);
  const [errorStatus, setErrorStatus] = useState<T | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = e.target;

    let isValid = true;
    let newError: T | null = null;

    if (validLength && newValue.length > validLength) {
      isValid = false;
    } else {
      validates.forEach((validate) => {
        const result = validate(newValue);
        if (!result.isValid && isValid) {
          isValid = false;
          newError = result.error as T;
        }
      });
    }

    if (isValid) {
      setValue(newValue);
    }

    if (newError) {
      setErrorStatus(newError);
    } else if (errorStatus) {
      setErrorStatus(null);
    }
  };

  return {
    value,
    onChange: handleChange,
    errorStatus,
    setValue,
  };
};

export default useInput;
