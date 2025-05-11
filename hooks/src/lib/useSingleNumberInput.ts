import { useState } from 'react';
import { isNotOverThanMax, isNumeric } from './utils';

const useSingleNumberInput = (maxLength: number) => {
  const [inputValue, setInputValue] = useState('');

  const errorText = (() => {
    if (!isNumeric(inputValue)) return '입력값이 숫자가 아닙니다.';
    if (!isNotOverThanMax(inputValue, maxLength)) return '입력값이 최대 길이를 초과했습니다.';
    return '';
  })();

  const isError = errorText !== '';

  return { inputValue, setInputValue, errorInfo: { isError, errorText } };
};

export default useSingleNumberInput;
