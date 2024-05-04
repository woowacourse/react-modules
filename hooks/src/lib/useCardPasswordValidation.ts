import { useState } from 'react';
import { Validation } from './cardDateValidate';

type passwordName = 'password';

const usePasswordValidation = () => {
  const [passwordValidation, setPasswordValidation] = useState({
    errorMessage: {
      password: '',
    },
    isError: {
      password: false,
    },
  });

  const passwordValidateHandler = (value: string, name: passwordName) => {
    try {
      Validation['password'](value);
      setPasswordValidation((prev) => ({
        ...prev,
        errorMessage: { ...prev.errorMessage, [name]: '' },
        isError: { ...prev.isError, [name]: false },
      }));
    } catch (error) {
      if (error instanceof Error) {
        setPasswordValidation((prev) => ({
          errorMessage: { ...prev.errorMessage, [name]: error.message },
          isError: { ...prev.isError, [name]: true },
        }));
      }
    }
  };

  return { passwordValidation, passwordValidateHandler };
};
export default usePasswordValidation;
