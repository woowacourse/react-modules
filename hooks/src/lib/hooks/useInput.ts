import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const resetError = () => {
    setIsError(false);
    setErrorMessage(undefined);
  };

  const setError = (errorMessage: string) => {
    if (!errorMessage) resetError();
    setIsError(true);
    setErrorMessage(errorMessage);
  };

  return {
    valueState: [value, setValue],
    errorState: { isError, errorMessage, setError },
  } as const;
};

export default useInput;
