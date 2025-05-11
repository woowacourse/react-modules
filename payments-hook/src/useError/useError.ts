import { useState } from 'react';

const useError = <T extends Record<string, boolean>>(initialError: T) => {
  const initialErrorMessage = Object.keys(initialError).reduce((acc, key) => {
    acc[key as keyof T] = '';
    return acc;
  }, {} as Record<keyof T, string>);

  const [errorMessage, setErrorMessage] = useState(initialErrorMessage);

  const clearError = (target: keyof T) => {
    setErrorMessage((prev) => ({ ...prev, [target]: '' }));
  };

  const changeError = (target: keyof T, message: string) => {
    setErrorMessage((prev) => ({ ...prev, [target]: message }));
  };

  const isError = Object.keys(initialError).reduce((acc, key) => {
    acc[key as keyof T] = errorMessage[key as keyof T] !== '';
    return acc;
  }, {} as Record<keyof T, boolean>);

  const error = {
    isError,
    errorMessage: errorMessage,
  };

  return { error, changeError, clearError };
};

export default useError;
