import { useState } from 'react';
import { validateCVC } from './cardDateValidate';

const useCVCValidation = () => {
  const [CVCValidation, setCVCValidation] = useState({
    errorMessage: {
      CVC: '',
    },
    isError: {
      CVC: false,
    },
  });

  const CVCValidateHandler = (value: string) => {
    try {
      validateCVC(value);
      setCVCValidation((prev) => ({
        ...prev,
        errorMessage: { ...prev.errorMessage, CVC: '' },
        isError: { ...prev.isError, CVC: false },
      }));
    } catch (error) {
      if (error instanceof Error) {
        setCVCValidation((prev) => ({
          errorMessage: { ...prev.errorMessage, CVC: error.message },
          isError: { ...prev.isError, CVC: true },
        }));
      }
    }
  };

  return { CVCValidation, CVCValidateHandler };
};
export default useCVCValidation;
