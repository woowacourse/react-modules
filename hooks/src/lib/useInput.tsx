import { useState, ChangeEvent } from "react";
import { validateLength } from "../validate/validate";

type validateType = (value: string) => void;

const useInput = <T,>(
  initialValue: string = "",
  validate: validateType,
  validLength?: number
) => {
  const [value, setValue] = useState(initialValue);
  const [errorStatus, setErrorStatus] = useState<T | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      validate(e.target.value);
      setValue(e.target.value);
      setErrorStatus(null);
    } catch (e) {
      if (e instanceof Error) {
        setErrorStatus(e.message as T);
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    try {
      if (e.target.value.length !== validLength && validLength) {
        validateLength(value, validLength);
      }
    } catch (e) {
      if (e instanceof Error) {
        setErrorStatus(e.message as T);
      }
    }
  };

  return {
    value,
    onChange: handleChange,
    errorStatus,
    onBlurValidLength: handleBlur,
  };
};

export default useInput;
