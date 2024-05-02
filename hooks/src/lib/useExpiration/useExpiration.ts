import { useState } from 'react';
import useExpirationValidation from './useExpirationValidation';
import { EXPIRATION_ERROR_TYPE } from './useExpiration.constant';

const useExpiration = () => {
  const [expiration, setExpiration] = useState({ month: '', year: '' });

  const { expirationError, validateExpirationDate } = useExpirationValidation(expiration);

  const handleChangeExpiration = (field: 'month' | 'year', value: string) => {
    const errorType = validateExpirationDate(field, value.slice(0, 2));

    if (errorType === EXPIRATION_ERROR_TYPE.nonNumeric || value.length > 2) return;

    setExpiration((prevExpiration) => ({ ...prevExpiration, [field]: value }));
  };

  return { expiration, expirationError, handleChangeExpiration };
};

export default useExpiration;
