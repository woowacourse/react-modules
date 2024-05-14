import { useState } from 'react';
import Validation from '../utils/validation';

type ErrorType = {
  state: boolean;
  message: string;
};

const useCardNumberValidation = () => {
  const [error, setError] = useState<ErrorType>({ state: false, message: '' });

  const checkNumericPattern = (value: string) => {
    if (!Validation.isNumericPattern(value)) {
      setError({ state: true, message: '숫자만 입력할 수 있습니다.' });

      return false;
    }
    return true;
  };

  const checkLength = (value: string, length: number) => {
    if (!Validation.isExactLength(length, value)) {
      setError({ state: true, message: `${length}자리를 입력해주세요.` });
    } else {
      setError({ state: false, message: '' });
    }
  };

  return { error, checkNumericPattern, checkLength };
};

export default useCardNumberValidation;
