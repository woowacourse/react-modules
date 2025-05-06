import { useState } from "react";

const useError = <
  E extends Record<string, boolean>,
  M extends Record<string, string>
>(
  initialIsError: E,
  initialErrorMessage: M
) => {
  const [isError, setIsError] = useState<E>(initialIsError);
  const [errorMessage, setErrorMessage] = useState<M>(initialErrorMessage);

  const clearError = (target: string) => {
    setIsError((prev) => ({ ...prev, [target]: false }));
    setErrorMessage((prev) => ({ ...prev, [target]: "" }));
  };

  const changeError = (target: string, message: string) => {
    setIsError((prev) => ({ ...prev, [target]: true }));
    setErrorMessage((prev) => ({ ...prev, [target]: message }));
  };

  const error = {
    isError: isError,
    errorMessage: errorMessage,
  };

  return { error, changeError, clearError };
};

export default useError;
