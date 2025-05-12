import { useState } from 'react';
import { isNotOverMaxLength, isNumeric } from './utils';
import isBeforeToday from './utils/isBeforeToday';
import ErrorMessage from './constants/ErrorMessage';

const useCardExpirationInput = () => {
  const [monthInputValue, setMonthInputValue] = useState('');
  const [yearInputValue, setYearInputValue] = useState('');

  const monthErrorText = (() => {
    if (!isNumeric(monthInputValue)) return ErrorMessage.IS_NOT_NUMERIC;
    if (!isNotOverMaxLength(monthInputValue, 2)) return ErrorMessage.IS_OVER_LENGTH;
    if (Number(monthInputValue) < 1 || Number(monthInputValue) > 12)
      return ErrorMessage.IS_NOT_MONTH_NUMBER;
    return '';
  })();

  const yearErrorText = (() => {
    if (!isNumeric(yearInputValue)) return ErrorMessage.IS_NOT_NUMERIC;
    if (!isNotOverMaxLength(yearInputValue, 2)) return ErrorMessage.IS_OVER_LENGTH;
    if (isBeforeToday(Number(monthInputValue), Number(yearInputValue)))
      return ErrorMessage.IS_OVER_EXPIRATION;

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
