import { useState, ChangeEvent } from 'react';
import { validateCardNumber } from '../validators/newCardInputValidator';

const useCardNumbers = (cardNumbersLength: number) => {
  const [cardNumbersInfo, setCardNumbersInfo] = useState({
    cardNumbers: '',
    isError: false,
  });
  const handleCardNumbers = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isError = validateCardNumber(value, cardNumbersLength);

    if (isError) {
      setCardNumbersInfo({
        cardNumbers: value,
        isError: true,
      });
      return;
    }

    setCardNumbersInfo({
      cardNumbers: value,
      isError: false,
    });
  };

  return {
    cardNumbersInfo,
    handleCardNumbers,
  };
};

export default useCardNumbers;
