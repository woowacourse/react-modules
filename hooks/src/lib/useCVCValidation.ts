import { useState } from 'react';
import { validateCVC } from './cardDateValidate';
import { CardError } from './type/Card';

const useCVCValidation = () => {
  const [CVCValidation, setCVCValidation] = useState({
    errorMessage: '',
    isError: false,
  });

  const CVCValidateHandler = (value: string): CardError => {
    try {
      validateCVC(value);
      setCVCValidation((prev) => ({
        ...prev,
        errorMessage: '',
        isError: false,
      }));
    } catch (error) {
      if (error instanceof Error) {
        setCVCValidation((prev) => ({
          ...prev,
          errorMessage: error.message,
          isError: true,
        }));
        return {
          errorMessage: error.message,
          isError: true,
        };
      }
    }
    return {
      errorMessage: '',
      isError: false,
    };
  };

  return { CVCValidation, CVCValidateHandler };
};
export default useCVCValidation;
