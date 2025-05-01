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

  const errorResults = {
    month: {},
    year: {},
  };

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    const nextExpDate = { ...cardExpDate, [name]: value };
    setCardExpDate(nextExpDate);

    errorResults.month = validateExpirationDateMonth(nextExpDate.month, nextExpDate.year);
    errorResults.year = validateExpirationDateYear(nextExpDate.month, nextExpDate.year);

    const monthErrorMessage = getExpirationFirstErrorMessage(errorResults.month, 'MONTH');
    const yearErrorMessage = getExpirationFirstErrorMessage(errorResults.year, 'YEAR');

    setErrorMessage(monthErrorMessage || yearErrorMessage || '');
  }

  return {
    cardExpDate,
    onChangeHandler,
    errorMessage,
  };
}
