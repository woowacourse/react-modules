import { useState } from 'react';
import { validatePassword } from './cardDateValidate';

const usePasswordValidation = () => {
  const [passwordValidation, setPasswordValidation] = useState({
    errorMessage: {
      password: '',
    },
    isError: {
      password: false,
    },
  });

  const passwordValidateHandler = (value: string) => {
    try {
      validatePassword(value);
      setPasswordValidation((prev) => ({
        ...prev,
        errorMessage: { ...prev.errorMessage, password: '' },
        isError: { ...prev.isError, password: false },
      }));
    } catch (error) {
      if (error instanceof Error) {
        setPasswordValidation((prev) => ({
          errorMessage: { ...prev.errorMessage, password: error.message },
          isError: { ...prev.isError, password: true },
        }));
      }
    }
  };

  return { passwordValidation, passwordValidateHandler };
};
export default usePasswordValidation;
