import { InputHTMLAttributes, useState } from "react";

interface UseRestrictedStateProps {
  type?: InputHTMLAttributes<HTMLInputElement>["type"] | "english";
  maxLength?: number;
}

export enum RestrictedErrorType {
  EnglishTypeError = "englishTypeError",
  NumberTypeError = "numberTypeError",
  MaxLengthError = "maxLengthError",
}

const useRestrictedState = ({ type, maxLength }: UseRestrictedStateProps = {}) => {
  const [value, setValue] = useState("");
  const [errorType, setErrorType] = useState<RestrictedErrorType | undefined>();

  const setValueWrapper = (value: string) => {
    if (type === "english" && !/^[a-zA-Z ]+$/.test(value)) {
      setErrorType(RestrictedErrorType.EnglishTypeError);
      return;
    } else if (type === "number" && Number.isNaN(Number(value))) {
      setErrorType(RestrictedErrorType.NumberTypeError);
      return;
    } else if (maxLength && value.length > maxLength) {
      setErrorType(RestrictedErrorType.MaxLengthError);
      return;
    } else {
      setErrorType(undefined);
    }
    setValue(value);
  };

  return {
    valueState: { value, setValue: setValueWrapper },
    errorType,
  };
};

export default useRestrictedState;
