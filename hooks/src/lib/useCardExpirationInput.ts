import { useState } from 'react';
import { isBeforeToday, isNotOverMaxLength, isNumeric } from './utils';
import ERROR_MESSAGE from './constants/ERROR_MESSAGE';

const useCardExpirationInput = () => {
  const [monthInputValue, setMonthInputValue] = useState('');
  const [yearInputValue, setYearInputValue] = useState('');

  const monthErrorText = (() => {
    if (!isNumeric(monthInputValue)) return ERROR_MESSAGE.IS_NOT_NUMERIC;
    if (!isNotOverMaxLength(monthInputValue, 2)) return ERROR_MESSAGE.IS_OVER_LENGTH;
    if (Number(monthInputValue) < 1 || Number(monthInputValue) > 12)
      return ERROR_MESSAGE.IS_NOT_MONTH_NUMBER;
    return '';
  })();

  const yearErrorText = (() => {
    if (!isNumeric(yearInputValue)) return ERROR_MESSAGE.IS_NOT_NUMERIC;
    if (!isNotOverMaxLength(yearInputValue, 2)) return ERROR_MESSAGE.IS_OVER_LENGTH;
    if (isBeforeToday(Number(monthInputValue), Number(yearInputValue)))
      return ERROR_MESSAGE.IS_OVER_EXPIRATION;

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
