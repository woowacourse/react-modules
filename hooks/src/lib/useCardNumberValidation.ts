import { useState } from 'react';
import { validateCardNumbers } from './cardDateValidate';
import { CardType } from './useCardType';
import { CardError } from './type/Card';

const useCardNumberValidation = () => {
  const [cardNumberValidation, setCardNumberValidation] = useState<CardError>({
    errorMessage: '',
    isError: false,
  });

  const cardNumberValidateHandler = (
    value: string,
    cardType: CardType
  ): CardError => {
    try {
      validateCardNumbers(value, cardType);
      setCardNumberValidation((prev) => ({
        ...prev,
        errorMessage: '',
        isError: false,
      }));
    } catch (error) {
      if (error instanceof Error) {
        setCardNumberValidation((prev) => ({
          ...prev,
          errorMessage: error.message,
          isError: true,
        }));
        return {
          ...cardNumberValidation,
          errorMessage: error.message,
          isError: true,
        };
      }
    }
    return {
      ...cardNumberValidation,
      errorMessage: '',
      isError: true,
    };
  };

  return { cardNumberValidation, cardNumberValidateHandler };
};
export default useCardNumberValidation;
