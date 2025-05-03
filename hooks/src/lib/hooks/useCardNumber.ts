import { useState } from 'react';
import { validateCardNumber } from '../validation/validateCardNumber';

interface CardNumberInput {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
}

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState<CardNumberInput>({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });

  const [isValid, setIsValid] = useState({
    input1: true,
    input2: true,
    input3: true,
    input4: true,
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleCardNumber = (numbers: CardNumberInput) => {
    setCardNumber(numbers);
    validateCardNumber({ numbers, isValid, setIsValid, setErrorMessage });
  };

  return { cardNumber, setCardNumber, handleCardNumber, isValid, errorMessage };
};

export default useCardNumber;
