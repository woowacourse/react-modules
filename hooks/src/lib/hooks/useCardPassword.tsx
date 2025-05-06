import { useState } from 'react';
import { getValidLength } from '../utils/getValidLength';
import { parseNumber } from '../utils/parseNumber';

function useCardPassword() {
  const [cardPassword, setCardPassword] = useState('');
  const [isCardPasswordError, setIsCardPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeCardPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originValue = e.target.value;
    const value = parseNumber(originValue);

    if (value.length > 2) {
      return;
    }

    const isValid = getValidLength(value, 2);

    setIsCardPasswordError(!isValid);

    setErrorMessage(!isValid ? '한 칸은 2자리 숫자를 입력해야합니다.' : '');

    setCardPassword(value);
  };

  return {
    cardPassword,
    isCardPasswordError,
    onChangeCardPassword,
    errorMessage,
  };
}

export default useCardPassword;
