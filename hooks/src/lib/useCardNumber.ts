import { useState } from 'react';

interface CardNumberInput {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
}

const useCardNumber = () => {
  const [isValid, setIsValid] = useState({
    input1: true,
    input2: true,
    input3: true,
    input4: true,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleCardNumber = (numbers: CardNumberInput) => {
    validateCardNumber(numbers);
  };
  const validateCardNumber = (numbers: CardNumberInput) => {
    let hasError = false;
    let message = '';

    const newIsValid = { ...isValid };

    Object.entries(numbers).forEach(([key, value]) => {
      if (!isNumber(value)) {
        newIsValid[key as keyof CardNumberInput] = false;
        if (!hasError) {
          message = '카드 번호는 숫자만 입력해주세요.';
          hasError = true;
        }
      } else if (!isFourDigits(value)) {
        newIsValid[key as keyof CardNumberInput] = false;
        if (!hasError) {
          message = '카드 번호는 4자리로 입력해주세요.';
          hasError = true;
        }
      } else {
        newIsValid[key as keyof CardNumberInput] = true;
      }
    });

    setIsValid(newIsValid);
    setErrorMessage(message);
  };

  return { handleCardNumber, isValid, errorMessage };
};

const isNumber = (value: string) => {
  return !Number.isNaN(Number(value));
};

const isFourDigits = (value: string) => {
  return value.length === 4;
};

export default useCardNumber;
