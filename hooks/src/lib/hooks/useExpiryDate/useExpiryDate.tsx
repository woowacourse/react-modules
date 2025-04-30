import React from 'react';
import { useState } from 'react';
import { validateCardInput } from '../../validation/cardNumberLengthInfo';

import { CardInputItem } from '../../types/cardInputItem.types';

const EXPIRY_DATE_INPUTS_LENGTH = 2;
const EXPIRE_DATE_INDEX = {
  MONTH: 0,
  YEAR: 1,
} as const;

const validateExpiryDate = (value: string, index: number) => {
  const { isValid, errorMessage } = validateCardInput(value, 2);
  if (!isValid) {
    return {
      isValid,
      errorMessage,
    };
  }

  if (index === EXPIRE_DATE_INDEX.MONTH && (Number(value) > 12 || Number(value) < 1)) {
    return {
      isValid: false,
      errorMessage: '유효기간의 월은 1~12월만 가능합니다.',
    };
  }

  const currentYear = new Date().getFullYear() % 100;
  if (index === EXPIRE_DATE_INDEX.YEAR && Number(value) < currentYear) {
    return {
      isValid: false,
      errorMessage: `유효기간의 연도는 현재 연도(${currentYear})보다 크거나 같아야 합니다.`,
    };
  }

  return {
    isValid: true,
    errorMessage: '',
  };
};

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
