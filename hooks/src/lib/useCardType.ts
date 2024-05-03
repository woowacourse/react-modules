import { useState } from 'react';
import { CARD_CONFIG } from './constants/system';

type CardNumberName =
  | 'cardNumber1'
  | 'cardNumber2'
  | 'cardNumber3'
  | 'cardNumber4';

const checkCardType = (cardNumber: string) => {
  const cardBrandNumber = parseInt(cardNumber.substring(0, 2), 10);
  if (Math.floor(cardBrandNumber / 10) === CARD_CONFIG.VISA) return 'Visa';
  if (
    CARD_CONFIG.MASTER.START <= cardBrandNumber &&
    cardBrandNumber <= CARD_CONFIG.MASTER.END
  )
    return 'MasterCard';
  return 'Empty';
};

const useCardType = () => {
  const [cardType, setCardType] = useState<string>('');

  const cardTypeHandler = (value: string, name: CardNumberName) => {
    if (name === 'cardNumber1') {
      setCardType(checkCardType(value));
    }
  };

  return { cardType, cardTypeHandler };
};
export default useCardType;
