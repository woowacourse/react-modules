import { useState } from 'react';

function useCardNumber() {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [isError, setIsError] = useState([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState('');

  const getValidLength = (value: string, maxLength: number) => {
    return value.length < maxLength;
  };

  const parseNumber = (value: string) => {
    return value.replace(/[^0-9]/g, '');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, n: number) => {
    const originValue = e.target.value;
    const value = parseNumber(originValue);

    if (value.length > 4) {
      return;
    }

    const newIsError = [...isError];

    for (let i = 0; i < cardNumber.length; i++) {
      if (i === n) {
        const isValid = getValidLength(value, 4);
        newIsError[i] = isValid ? false : true;
      }

      if (i !== n) {
        const isValid = getValidLength(cardNumber[i], 4);
        newIsError[i] = isValid ? false : true;
      }
    }
    setIsError(newIsError);

    setErrorMessage(
      newIsError.some((value) => value === true)
        ? '한 칸은 4자리 숫자를 입력해야합니다.'
        : ''
    );

    setCardNumber((prev) => {
      const newCardNumber = [...prev];
      newCardNumber[n] = value;
      return newCardNumber;
    });
  };

  return {
    cardNumber,
    isError,
    errorMessage,
    onChange,
  };
}

export default useCardNumber;
