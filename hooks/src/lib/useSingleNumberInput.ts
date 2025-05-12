import { useState } from 'react';
import { isNotOverMaxLength, isNumeric } from './utils';
import ErrorMessage from './constants/ErrorMessage';

const useSingleNumberInput = (maxLength: number) => {
  const [inputValue, setInputValue] = useState('');

  const errorText = (() => {
    if (!isNumeric(inputValue)) return ErrorMessage.IS_NOT_NUMERIC;
    if (!isNotOverMaxLength(inputValue, maxLength)) return ErrorMessage.IS_OVER_LENGTH;
    return '';
  })();

  const isError = errorText !== '';

  return { inputValue, setInputValue, errorInfo: { isError, errorText } };
};

export default useSingleNumberInput;
