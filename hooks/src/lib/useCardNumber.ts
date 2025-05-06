import { useState } from "react";

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
  const [errorMessage, setErrorMessage] = useState("");

  const handleCardNumber = (numbers: CardNumberInput) => {
    const numbersArray = Object.values(numbers);
    validateCardNumber(numbersArray);
  };

  const validateCardNumber = (numbers: string[]) => {
    let isValid = true;

    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (number.length === 0) continue;
      if (!isNumber(number)) {
        setErrorMessage("숫자만 입력해 주세요.");
        setIsValid((prev) => ({ ...prev, [`input${i + 1}`]: false }));
        isValid = false;
        continue;
      }
      if (!isFourDigits(number)) {
        setErrorMessage("4자리의 숫자를 입력해 주세요.");
        setIsValid((prev) => ({ ...prev, [`input${i + 1}`]: false }));
        isValid = false;
      }
    }
    if (isValid) {
      setIsValid({
        input1: true,
        input2: true,
        input3: true,
        input4: true,
      });
      setErrorMessage("");
    }
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
