import {  useState } from 'react';
import { Validation } from './validate';


const useExpiryDateValidation = () => {
  const [expiryDateValidation, setExpiryDateValidation] = useState({
    errorMessage: {
      month:'',
      year:''
    },
    isError: {
        month:false,
        year:false
      }
  });

  const expiryDateValidateHandler = (value: string, name: string) => {
    try {
      Validation[name](value);
      setExpiryDateValidation((prev) => ({
        ...prev,
        errorMessage: { ...prev.errorMessage, [name]: '' },
        isError: { ...prev.isError, [name]: false },
      }));
    } catch (error) {
      if (error instanceof Error) {
        setExpiryDateValidation((prev) => ({
          errorMessage: { ...prev.errorMessage, [name]: error.message },
          isError: { ...prev.isError, [name]: true },
        }));
      }
    }
  };



  return {expiryDateValidation, expiryDateValidateHandler}
};
export default useExpiryDateValidation;