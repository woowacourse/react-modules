import { useState } from 'react';
import { validatePassword } from './cardDateValidate';
import { CardError } from './type/Card';

const usePasswordValidation = () => {
  const [passwordValidation, setPasswordValidation] = useState<CardError>({
    errorMessage: '',

    isError: false,
  });

  const passwordValidateHandler = (value: string): CardError => {
    try {
      validatePassword(value);
      setPasswordValidation((prev) => ({
        ...prev,
        errorMessage: '',
        isError: false,
      }));
    } catch (error) {
      if (error instanceof Error) {
        setPasswordValidation((prev) => ({
          ...prev,
          errorMessage: error.message,
          isError: true,
        }));
        return {
          ...passwordValidation,
          errorMessage: error.message,
          isError: true,
        };
      }
    }
    return {
      ...passwordValidation,
      errorMessage: '',
      isError: false,
    };
  };

  return { passwordValidation, passwordValidateHandler };
};
export default usePasswordValidation;
