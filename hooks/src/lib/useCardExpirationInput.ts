import { useState } from 'react';
import { isNotOverMaxLength, isNumeric } from './utils';

const useCardExpirationInput = () => {
  const [monthInputValue, setMonthInputValue] = useState('');
  const [yearInputValue, setYearInputValue] = useState('');

  const monthErrorText = (() => {
    if (!isNumeric(monthInputValue)) return '입력값이 숫자가 아닙니다.';
    if (!isNotOverMaxLength(monthInputValue, 2)) return '입력값이 최대 길이를 초과했습니다.';
    return '';
  })();

  const yearErrorText = (() => {
    if (!isNumeric(yearInputValue)) return '입력값이 숫자가 아닙니다.';
    if (!isNotOverMaxLength(yearInputValue, 2)) return '입력값이 최대 길이를 초과했습니다.';
    return '';
  })();

  return {
    cardExpirationValue: { month: monthInputValue, year: yearInputValue },
    setCardExpirationValue: { month: setMonthInputValue, year: setYearInputValue },
    errorInfo: {
      month: { isError: monthErrorText !== '', errorText: monthErrorText },
      year: { isError: yearErrorText !== '', errorText: yearErrorText },
    },
  };
};

export default useCardExpirationInput;
