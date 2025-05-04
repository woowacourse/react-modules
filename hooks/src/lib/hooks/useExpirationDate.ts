import { useState } from 'react';
import { validateExpirationDate } from '../validation/validateExpirationDate';

interface ExpirationDateInput {
  month: string;
  year: string;
}

const useExpirationDate = () => {
  const [expirationDate, setExpirationDate] = useState<ExpirationDateInput>({
    month: '',
    year: '',
  });
  const [isValid, setIsValid] = useState({ month: true, year: true });
  const [errorMessage, setErrorMessage] = useState('');

  const handleExpirationDate = (date: ExpirationDateInput) => {
    setExpirationDate(date);

    const { isValid: newIsValid, message } = validateExpirationDate(date);
    setIsValid(newIsValid);
    setErrorMessage(message);
  };

  return { expirationDate, setExpirationDate, handleExpirationDate, isValid, errorMessage };
};

export default useExpirationDate;
