import { useState } from 'react';

import { CardInputItem } from '../../types/cardInputItem.types';
import { validateExpiryDate } from '../../validation/expiryDate';

const EXPIRY_DATE_INPUTS_LENGTH = 2;

export const useExpiryDate = () => {
  const [expiryDate, setExpiryDate] = useState<CardInputItem[]>(
    Array.from({ length: EXPIRY_DATE_INPUTS_LENGTH }, () => ({ value: '', isValid: true }))
  );

  const [errorMessage, setErrorMessage] = useState('');

  const handleExpiryDateChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = event.target.value;

    const { isValid, errorMessage } = validateExpiryDate(newValue, index);

    setExpiryDate((prev) => {
      const newExpiryDate = [...prev];
      newExpiryDate[index].value = newValue;
      newExpiryDate[index].isValid = isValid;
      return newExpiryDate;
    });

    if (!isValid) {
      setErrorMessage(errorMessage);
    }
  };

  return {
    expiryDate,
    errorMessage,
    handleExpiryDateChange,
  };
};
