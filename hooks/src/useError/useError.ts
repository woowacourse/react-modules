import { useState } from "react";

const useError = <
  E extends Record<string, boolean>,
  M extends Record<string, string>
>(
  initialIsError: E,
  initialErrorMessage: M
) => {
  const [error, setError] = useState<E>(initialIsError);
  const [errorMessage, setErrorMessage] = useState<M>(initialErrorMessage);

  const clearError = (target: string) => {
    setError((prev) => ({ ...prev, [target]: false }));
    setErrorMessage((prev) => ({ ...prev, [target]: "" }));
  };

  const changeError = (target: string, message: string) => {
    setError((prev) => ({ ...prev, [target]: true }));
    setErrorMessage((prev) => ({ ...prev, [target]: message }));
  };

  return { error, errorMessage, changeError, clearError };
};

export default useError;
