import { useState } from 'react';
import {
  validateExpirationDateMonth,
  validateExpirationDateYear,
} from './validator/validateCardInput';
import { getExpirationFirstErrorMessage } from './validator/getFirstErrorMessage';

export function useCardExpDateInput() {
  const [cardExpDate, setCardExpDate] = useState({
    month: '',
    year: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    const nextExpDate = { ...cardExpDate, [name]: value };
    setCardExpDate(nextExpDate);

    const monthErrorResult = validateExpirationDateMonth(nextExpDate.month, nextExpDate.year);
    const yearErrorResult = validateExpirationDateYear(nextExpDate.month, nextExpDate.year);

    const monthErrorMessage = getExpirationFirstErrorMessage(monthErrorResult, 'MONTH');
    const yearErrorMessage = getExpirationFirstErrorMessage(yearErrorResult, 'YEAR');

    setErrorMessage(monthErrorMessage || yearErrorMessage || '');
  }

  return {
    cardExpDate,
    onChangeHandler,
    errorMessage,
  };
}
