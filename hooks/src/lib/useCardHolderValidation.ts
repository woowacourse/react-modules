import { useState } from 'react';
import { Validation } from './validate';

type CardHolderName = 'cardHolder';

const useCardHolderValidation = () => {
  const [cardHolderValidation, setCardHolderValidation] = useState({
    errorMessage: {
      cardHolder: '',
    },
    isError: { cardHolder: false },
  });

  const cardHolderValidateHandler = (value: string, name: CardHolderName) => {
    try {
      Validation['userName'](value);
      setCardHolderValidation((prev) => ({
        ...prev,
        errorMessage: { ...prev.errorMessage, [name]: '' },
        isError: { ...prev.isError, [name]: false },
      }));
    } catch (error) {
      if (error instanceof Error) {
        setCardHolderValidation((prev) => ({
          errorMessage: { ...prev.errorMessage, [name]: error.message },
          isError: { ...prev.isError, [name]: true },
        }));
      }
    }
  };

  return { cardHolderValidation, cardHolderValidateHandler };
};
export default useCardHolderValidation;
