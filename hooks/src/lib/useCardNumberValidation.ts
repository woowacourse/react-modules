import { useState } from 'react';
import { validateCardNumbers } from './cardDateValidate';
import { CARD_NUMBER } from './constants/cardDataValidation';

const useCardNumberValidation = () => {
  const [cardNumberValidation, setCardNumberValidation] = useState({
    errorMessage: {
      cardNumbers: '',
    },
    isError: {
      cardNumbers: false,
    },
  });

  const cardNumberValidateHandler = (
    value: string,
    cardType: keyof typeof CARD_NUMBER
  ) => {
    try {
      validateCardNumbers(value, cardType);
      setCardNumberValidation((prev) => ({
        ...prev,
        errorMessage: { cardNumbers: '' },
        isError: { cardNumbers: false },
      }));
    } catch (error) {
      if (error instanceof Error) {
        setCardNumberValidation((prev) => ({
          ...prev,
          errorMessage: { cardNumbers: error.message },
          isError: { cardNumbers: true },
        }));
      }
    }
  };

  return { cardNumberValidation, cardNumberValidateHandler };
};
export default useCardNumberValidation;
