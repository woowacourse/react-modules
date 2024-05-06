import { useState, ChangeEvent } from 'react';
import { validateCardExpiration } from '../validators/newCardInputValidator';

const useCardExpiration = () => {
  const [cardExpiration, setCardExpiration] = useState({
    MM: '',
    YY: '',
    isError: false,
  });

  const handleCardExpirationMM = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isError = validateCardExpiration(value, 'MM');

    if (isError) {
      setCardExpiration({
        MM: value,
        YY: cardExpiration.YY,
        isError: true,
      });
      return;
    }

    setCardExpiration({
      MM: value,
      YY: cardExpiration.YY,
      isError: false,
    });
  };

  const handleCardExpirationYY = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isError = validateCardExpiration(value, 'YY');

    if (isError) {
      setCardExpiration({
        MM: cardExpiration.MM,
        YY: value,
        isError: true,
      });
      return;
    }

    setCardExpiration({
      MM: cardExpiration.MM,
      YY: value,
      isError: false,
    });
  };

  return {
    cardExpiration,
    handleCardExpirationMM,
    handleCardExpirationYY,
  };
};

export default useCardExpiration;
