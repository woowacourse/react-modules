import { useState } from "react";

export type Status = "default" | "change" | "blur";
export type InputState = ReturnType<typeof useInput>;
const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [status, setStatus] = useState<Status>("default");
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const setError = (message: string) => {
    setErrorMessage(message);
    setIsError(true);
  };
  const resetError = () => {
    setErrorMessage("");
    setIsError(false);
  };

  return { value, status, errorMessage, isError, setValue, setStatus, setError, resetError };
};

export default useInput;
