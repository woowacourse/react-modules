import { useState, ChangeEvent } from 'react';
import { isOnlyDigits } from '../utils/validateNumber';
import { CARD_CVC_ERROR } from '../constants/errorMessages';
import { CARD_CVC } from '../constants/cardConfig';

export const useCardCVC = (initialCVC: string, initialError: string) => {
  const [cardCVC, setCardCVC] = useState<string>(initialCVC);
  const [cardCVCError, setCardCVCError] = useState(initialError);

  const handleCardCVCChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isNumber = isOnlyDigits(value);

    if (!isNumber && value !== '') {
      setCardCVCError(CARD_CVC_ERROR.onlyNumbers);
      return;
    }

    setCardCVC(value === '' ? '' : value);
    setCardCVCError('');
  };

  const isCardCVCValid = () => {
    return cardCVC !== '' && cardCVC?.length === CARD_CVC.maxLength;
  };

  return {
    cardCVC,
    cardCVCError,
    handleCardCVCChange,
    isCardCVCValid,
  };
};
