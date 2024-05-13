import { useState, ChangeEvent } from 'react';
import { validateCardExpiration } from './validators/validateCardExpiration';

const useCardExpiration = () => {
  const [cardExpiration, setCardExpiration] = useState({
    MM: '',
    YY: '',
    errorMessage: '',
  });

  const handleCardExpirationMM = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const message = validateCardExpiration(value, 'MM');

    setCardExpiration({
      MM: value,
      YY: cardExpiration.YY,
      errorMessage: message,
    });
  };

  const handleCardExpirationYY = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const message = validateCardExpiration(value, 'YY');

    setCardExpiration({
      MM: cardExpiration.MM,
      YY: value,
      errorMessage: message,
    });
  };

  return {
    cardExpiration,
    handleCardExpirationMM,
    handleCardExpirationYY,
  };
};

export default useCardExpiration;
