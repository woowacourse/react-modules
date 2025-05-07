import { useState } from 'react';
import { getValidLength } from '../utils/getValidLength';
import { parseNumber } from '../utils/parseNumber';

function useCardNumber() {
  const [value, setCardNumber] = useState(['', '', '', '']);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, n: number) => {
    const originValue = e.target.value;
    const parsedvalue = parseNumber(originValue);

    if (parsedvalue.length > 4) return;

    setCardNumber((prev) => {
      const newCardNumber = [...prev];
      newCardNumber[n] = parsedvalue;
      return newCardNumber;
    });
  };

  const isError = value.map((val) => (getValidLength(val, 4) ? false : true));
  const errorMessage = isError.some((parsedvalue) => parsedvalue === true)
    ? '한 칸은 4자리 숫자를 입력해야합니다.'
    : '';

  const cardNumber = {
    value,
    isError,
    errorMessage,
    onChange,
  };
  return cardNumber;
}

export default useCardNumber;
