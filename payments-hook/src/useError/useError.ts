import { useState } from 'react';

const useError = () => {
  const [errorMessage, setErrorMessage] = useState<
    Record<string, string | undefined>
  >({});

  const clearError = (key: string) => {
    setErrorMessage((prev) => {
      const { [key]: _, ...rest } = prev;
      return rest;
    });
  };

  const changeError = (key: string, message: string) => {
    setErrorMessage((prev) => ({ ...prev, [key]: message }));
  };

  const isError = Object.fromEntries(
    Object.entries(errorMessage).map(([key, message]) => [
      key,
      message !== undefined && message !== '',
    ])
  );

  return {
    error: {
      isError: isError as Record<string, boolean>,
      errorMessage,
    },
    changeError,
    clearError,
  };
};

export default useError;
