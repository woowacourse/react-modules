import { useState } from 'react';
import { validateExpiryDate } from './cardDateValidate';
import { ExpiryDateError } from './type/Card';

export type CardExpiryName = 'month' | 'year';

const useExpiryDateValidation = () => {
  const [expiryDateValidation, setExpiryDateValidation] =
    useState<ExpiryDateError>({
      errorMessage: {
        month: '',
        year: '',
      },
      isError: {
        month: false,
        year: false,
      },
    });

  const expiryDateValidateHandler = (
    value: string,
    name: CardExpiryName
  ): ExpiryDateError => {
    try {
      validateExpiryDate(value, name);
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
        return {
          ...expiryDateValidation,
          errorMessage: {
            ...expiryDateValidation.errorMessage,
            [name]: error.message,
          },
          isError: { ...expiryDateValidation.isError, [name]: true },
        };
      }
    }
    return {
      ...expiryDateValidation,
      errorMessage: { ...expiryDateValidation.errorMessage, [name]: '' },
      isError: { ...expiryDateValidation.isError, [name]: false },
    };
  };

  return { expiryDateValidation, expiryDateValidateHandler };
};
export default useExpiryDateValidation;
