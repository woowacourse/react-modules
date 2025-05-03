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
    validateExpirationDate({ date, setIsValid, setErrorMessage });
  };

  return { expirationDate, setExpirationDate, handleExpirationDate, isValid, errorMessage };
};

export default useExpirationDate;
