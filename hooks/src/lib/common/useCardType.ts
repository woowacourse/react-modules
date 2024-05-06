import { useEffect, useState } from 'react';
import Validation from '../utils/validation';

const VISA_LENGTH = 16;

const useCardType = (cardNumbers: string[]) => {
  const [cardBrand, setCardBrand] = useState('');

  useEffect(() => {
    const cardNumber = cardNumbers.join('');

    if (Validation.isExactLength(VISA_LENGTH, cardNumber)) {
      if (Validation.isVisa(cardNumber)) {
        setCardBrand('visa');
        return;
      }

      if (Validation.isMasterCard(cardNumber)) {
        setCardBrand('mastercard');
        return;
      }
    }

    setCardBrand('');
  }, [...cardNumbers]);

  return cardBrand;
};

export default useCardType;
