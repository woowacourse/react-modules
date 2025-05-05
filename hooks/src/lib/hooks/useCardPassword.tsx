import { useState } from 'react';
import { getValidLength } from '../utils/getValidLength';
import { parseNumber } from '../utils/parseNumber';

function useCardPassword() {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originValue = e.target.value;
    const parsedValue = parseNumber(originValue);

    if (parsedValue.length > 2) {
      return;
    }

    const isValid = getValidLength(parsedValue, 2);

    setIsError(!isValid);

    setErrorMessage(!isValid ? '한 칸은 2자리 숫자를 입력해야합니다.' : '');

    setValue(parsedValue);
  };

  const cardPassword = {
    value,
    isError,
    onChange,
    errorMessage,
  };
  return cardPassword;
}

export default useCardPassword;
