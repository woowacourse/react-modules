import { useState } from 'react';
import { getNumberErrorMessage } from '../../utils/validation/validation';

export const VALID_CARD_NUMBER_LENGTH = 16;

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [isValidCardNumber, setIsValidCardNumber] = useState(false);
  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState('');

  const handleCardNumbersChange = (number: string) => {
    const errorMessage = getNumberErrorMessage(number, VALID_CARD_NUMBER_LENGTH);

    setCardNumberErrorMessage(errorMessage);

    if (errorMessage !== '') {
      setIsValidCardNumber(false);
      return;
    }

    setCardNumber(number);
    setIsValidCardNumber(true);
  };

  return {
    cardNumber,
    handleCardNumbersChange,
    isValidCardNumber,
    cardNumberErrorMessage,
  };
};

export default useCardNumber;
