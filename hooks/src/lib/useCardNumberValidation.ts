import { useState } from 'react';
import { validateCardNumbers } from './cardDateValidate';
import { CardError } from './type/Card';
import { CARD_BRAND_NUMBER_LENGTH } from './constants/cardDataValidation';

const useCardNumberValidation = () => {
  const [cardNumberValidation, setCardNumberValidation] = useState<CardError>({
    errorMessage: '',
    isError: false,
  });

  const cardNumberValidateHandler = (
    value: string,
    cardType: keyof typeof CARD_BRAND_NUMBER_LENGTH
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
