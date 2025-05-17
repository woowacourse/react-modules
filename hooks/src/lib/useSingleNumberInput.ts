import { useState } from 'react';
import { isNotOverMaxLength, isNumeric } from './utils';
import ERROR_MESSAGE from './constants/ERROR_MESSAGE';

const useSingleNumberInput = (maxLength: number) => {
  const [inputValue, setInputValue] = useState('');

  const errorText = (() => {
    if (!isNumeric(inputValue)) return ERROR_MESSAGE.IS_NOT_NUMERIC;
    if (!isNotOverMaxLength(inputValue, maxLength)) return ERROR_MESSAGE.IS_OVER_LENGTH;
    return '';
  })();

  const isError = errorText !== '';

  return { inputValue, setInputValue, errorInfo: { isError, errorText } };
};

export default useSingleNumberInput;
