import { useState } from 'react';
import { CardType, getCardType, getValidCardNumberLength } from '../../utils/card';

const useCardType = () => {
  const [cardType, setCardType] = useState('');

  const handleCardType = (cardNumber: string) => {
    if (cardType === 'VISA' && cardNumber.length > 2) return;
    if (['MASTERCARD', 'DINERS', 'AMEX'].includes(cardType) && cardNumber.length > 3) return;
    if (cardType === 'UNIONPAY' && cardNumber.length > 6) return;

    const newCardType = getCardType(cardNumber);

    setCardType(newCardType);
  };

  return {
    cardType,
    validCardNumberLength: getValidCardNumberLength(cardType as CardType),
    handleCardType,
  };
};

export default useCardType;
