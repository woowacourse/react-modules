import { useState } from 'react';
import { validateUserName } from './cardDateValidate';
import { CardError } from './type/Card';

const useCardHolderValidation = () => {
  const [cardHolderValidation, setCardHolderValidation] = useState<CardError>({
    errorMessage: '',
    isError: false,
  });

  const cardHolderValidateHandler = (value: string): CardError => {
    try {
      validateUserName(value);
      setCardHolderValidation((prev) => ({
        ...prev,
        errorMessage: '',
        isError: false,
      }));
    } catch (error) {
      if (error instanceof Error) {
        setCardHolderValidation((prev) => ({
          ...prev,
          errorMessage: error.message,
          isError: true,
        }));
        return {
          ...cardHolderValidation,
          errorMessage: error.message,
          isError: true,
        };
      }
    }
    return {
      ...cardHolderValidation,
      errorMessage: '',
      isError: false,
    };
  };

  return { cardHolderValidation, cardHolderValidateHandler };
};
export default useCardHolderValidation;
