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
    const { value } = e.target;

    let newError: T | null = null;

    if (validLength && value.length > validLength) return;

    validates.forEach((validate) => {
      const result = validate(value);
      const { isValid, error } = result;
      if (!isValid && !newError) {
        newError = error as T;
      } else {
        if (errorStatus === error) {
          setErrorStatus(null);
        }
      }
    });

    if (newError) {
      setErrorStatus(newError);
    }
    setValue(value);
  };

  return {
    value,
    onChange: handleChange,
    errorStatus,
    setErrorStatus,
  };
};

export default useInput;
