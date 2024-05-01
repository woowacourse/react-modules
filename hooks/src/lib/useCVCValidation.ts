import { useState } from 'react';
import { Validation } from './validate';

const useCVCValidation = () => {
  const [CVCValidation, setCVCValidation] = useState({
    errorMessage: {
      CVC : ''
    },
    isError: {
      CVC: false
    }
  });

  const CVCValidateHandler = (value: string, name: string) => {
    try {
      Validation['CVC'](value);
      setCVCValidation((prev) => ({
        ...prev,
        errorMessage: { ...prev.errorMessage, [name]: '' },
        isError: { ...prev.isError, [name]: false },
      }));
    } catch (error) {
      if (error instanceof Error) {
        setCVCValidation((prev) => ({
          errorMessage: { ...prev.errorMessage, [name]: error.message },
          isError: { ...prev.isError, [name]: true },
        }));
      }
    }
  };

  return {CVCValidation, CVCValidateHandler}
};
export default useCVCValidation;