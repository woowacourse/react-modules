import { InputHTMLAttributes, useState } from "react";

interface UseRestrictedStateProps {
  type?: InputHTMLAttributes<HTMLInputElement>["type"] | "english";
  maxLength?: number;
  typeErrorMessage?: string;
  maxLengthErrorMessage?: string;
}

const useRestrictedState = ({
  type,
  maxLength,
  typeErrorMessage,
  maxLengthErrorMessage,
}: UseRestrictedStateProps = {}) => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const resetError = () => {
    setErrorMessage(undefined);
  };

  const setError = (errorMessage: string | undefined) => {
    if (!errorMessage) {
      resetError();
      return;
    }
    setErrorMessage(errorMessage);
  };

  const setValueWrapper = (value: string) => {
    if ((type === "english" && !/^[a-zA-Z ]+$/.test(value)) || (type === "number" && Number.isNaN(Number(value)))) {
      setError(typeErrorMessage);
      return;
    }
    if (maxLength && value.length > maxLength) {
      setError(maxLengthErrorMessage);
      return;
    }
    setError(undefined);
    setValue(value);
  };

  return {
    valueState: { value, setValue: setValueWrapper },
    errorState: { isError: !!errorMessage, errorMessage, setError },
  };
};

export default useRestrictedState;
