import { useState } from 'react';
import { getValidLength } from '../utils/getValidLength';
import { parseNumber } from '../utils/parseNumber';

function useCardCVC() {
  const [cardCVC, setCardCVC] = useState('');
  const [isCardCVCError, setIsCardCVCError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originValue = e.target.value;
    const value = parseNumber(originValue);

    if (value.length > 3) {
      return;
    }

    const isValid = getValidLength(value, 3);

    setIsCardCVCError(!isValid);

    setErrorMessage(isValid ? '한 칸은 3자리 숫자를 입력해야합니다.' : '');

    setCardCVC(value);
  };

  return {
    cardCVC,
    isCardCVCError,
    onChangeCVC,
    errorMessage,
  };
}

export default useCardCVC;
