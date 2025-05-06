import { useState } from 'react';
import { getValidLength } from '../utils/getValidLength';
import { parseNumber } from '../utils/parseNumber';

function useCardNumber() {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [isError, setIsError] = useState([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, n: number) => {
    const originValue = e.target.value;
    const value = parseNumber(originValue);

    if (value.length > 4) {
      return;
    }

    const newCardNumber = [...cardNumber];
    newCardNumber[n] = value;

    const newIsError = newCardNumber.map((val) =>
      getValidLength(val, 4) ? false : true
    );

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
