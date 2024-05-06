import { useState, ChangeEvent } from 'react';
import { validateCardNumber } from '../validators/newCardInputValidator';

const useCardNumbers = (cardNumbersLength: number) => {
  const [cardNumbersInfo, setCardNumbersInfo] = useState({
    cardNumbers: '',
    errorMessage: '',
  });
  const handleCardNumbers = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const message = validateCardNumber(value, cardNumbersLength);

    setCardNumbersInfo({
      cardNumbers: value,
      errorMessage: message,
    });
  };

  return {
    cardNumbersInfo,
    handleCardNumbers,
  };
};

export default useCardNumbers;
