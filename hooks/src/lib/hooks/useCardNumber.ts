import { useState } from 'react';
import { validateCardNumber } from '../validation/validateCardNumber';
import { matchCardBrand } from '../utils/matchCardBrand';

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

    const { isValid: newIsValid, message } = validateCardNumber(numbers);
    setIsValid(newIsValid);
    setErrorMessage(message);
  };

  const cardBrand = matchCardBrand(cardNumber.input1, cardNumber.input2);

  return { cardNumber, setCardNumber, handleCardNumber, isValid, errorMessage, cardBrand };
};

export default useCardNumber;
