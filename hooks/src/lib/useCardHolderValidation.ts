import { useState } from 'react';
import { validateUserName } from './cardDateValidate';

const useCardHolderValidation = () => {
  const [cardHolderValidation, setCardHolderValidation] = useState({
    errorMessage: {
      cardHolder: '',
    },
    isError: { cardHolder: false },
  });

  const cardHolderValidateHandler = (value: string) => {
    try {
      validateUserName(value);
      setCardHolderValidation((prev) => ({
        ...prev,
        errorMessage: { ...prev.errorMessage, cardHolder: '' },
        isError: { ...prev.isError, cardHolder: false },
      }));
    } catch (error) {
      if (error instanceof Error) {
        setCardHolderValidation((prev) => ({
          errorMessage: { ...prev.errorMessage, cardHolder: error.message },
          isError: { ...prev.isError, cardHolder: true },
        }));
      }
    }
  };

  return { cardHolderValidation, cardHolderValidateHandler };
};
export default useCardHolderValidation;
