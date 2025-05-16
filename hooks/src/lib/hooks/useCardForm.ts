import { CARD_TYPES } from '../constants/cardTypes';
import useCardCVC from './useCardCVC';
import useCardExpiry from './useCardExpiry';
import useCardNumber from './useCardNumber';

export interface CardFormData {
  cardNumber: string;
  cardExpMonth: string;
  cardExpYear: string;
  cardCVC: string;
}

export default function useCardForm() {
  const cardNumber = useCardNumber();
  const cardExpiry = useCardExpiry();
  const cardCVC = useCardCVC(cardNumber.cardType ?? CARD_TYPES.VISA);

  const isFormValid = (): boolean => {
    return cardNumber.isValid() && cardExpiry.isValid() && cardCVC.isValid();
  };

  const resetForm = (): void => {
    cardNumber.reset();
    cardExpiry.reset();
    cardCVC.reset();
  };

  const getFormData = (): CardFormData => {
    return {
      cardNumber: cardNumber.value,
      cardExpMonth: cardExpiry.month.value,
      cardExpYear: cardExpiry.year.value,
      cardCVC: cardCVC.value,
    };
  };

  const hasErrors = (): boolean => {
    return cardNumber.error || cardExpiry.hasError || cardCVC.error;
  };

  return {
    cardNumber,
    cardExpiry,
    cardCVC,
    isFormValid,
    resetForm,
    getFormData,
    hasErrors,
  };
}
