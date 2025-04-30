import { useState } from 'react';

const useError = <T>(initialError: T) => {
  const [isError, setIsError] = useState<T>(initialError);
  const [errorMessage, setErrorMessage] = useState(initialError);

  const clearError = (target: string) => {
    setIsError((prev) => ({ ...prev, [target]: false }));
    setErrorMessage((prev) => ({ ...prev, [target]: '' }));
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
