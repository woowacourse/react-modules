import { useState } from 'react';

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
    validateCardNumber(numbers);
  };

  const validateCardNumber = (numbers: CardNumberInput) => {
    let hasError = false;
    let message = '';

    const newIsValid = { ...isValid };

    if (!isValidFirstCardNumber(numbers.input1)) {
      newIsValid.input1 = false;
      message = '첫번째 카드 번호는 4 또는 51~55 사이의 숫자여야 합니다.';
      hasError = true;
    } else {
      newIsValid.input1 = true;
    }

    (Object.entries(numbers) as [keyof CardNumberInput, string][]).forEach(([key, value]) => {
      if (!isNumber(value)) {
        newIsValid[key] = false;
        if (!hasError) {
          message = '카드 번호는 숫자만 입력해주세요.';
          hasError = true;
        }
      } else if (!isFourDigits(value)) {
        newIsValid[key] = false;
        if (!hasError) {
          message = '카드 번호는 4자리로 입력해주세요.';
          hasError = true;
        }
      } else if (key !== 'input1') {
        newIsValid[key] = true;
      }
    });

    setIsValid(newIsValid);
    setErrorMessage(message);
  };

  return { cardNumber, setCardNumber, handleCardNumber, isValid, errorMessage };
};

const isNumber = (value: string) => !Number.isNaN(Number(value));

const isFourDigits = (value: string) => value.length === 4;

const isValidFirstCardNumber = (value: string) => {
  if (!/^\d+$/.test(value)) return false;
  if (value.startsWith('4')) return true;
  const prefix = Number(value.slice(0, 2));
  return prefix >= 51 && prefix <= 55;
};

export default useCardNumber;
