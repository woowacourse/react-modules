import { useState } from 'react';

interface ExpirationDateInput {
  month: string;
  year: string;
}

const useExpirationDate = () => {
  const [isValid, setIsValid] = useState({ month: true, year: true });
  const [errorMessage, setErrorMessage] = useState('');

  const handleExpirationDate = (date: ExpirationDateInput) => {
    validateExpirationDate(date);
  };

  const validateExpirationDate = (date: ExpirationDateInput) => {
    const { month, year } = date;

    if (!validateMonth(month)) return;

    if (!validateYear(year)) return;

    setErrorMessage('');
  };

  const validateMonth = (month: string) => {
    if (!isNumber(month)) {
      setIsValid((prev) => ({ ...prev, month: false }));
      setErrorMessage('숫자만 입력해 주세요.');
      return false;
    }
    if (!isTwoDigits(month)) {
      setIsValid((prev) => ({ ...prev, month: false }));
      setErrorMessage('2자리의 숫자를 입력해 주세요.');
      return false;
    }

    if (!isValidMonth(month)) {
      setIsValid((prev) => ({ ...prev, month: false }));
      setErrorMessage('1~12 사이의 숫자를 입력해 주세요.');
      return false;
    }

    setIsValid((prev) => ({ ...prev, month: true }));
    return true;
  };

  const validateYear = (year: string) => {
    if (!isNumber(year)) {
      setIsValid((prev) => ({ ...prev, year: false }));
      setErrorMessage('숫자만 입력해 주세요.');
      return false;
    }
    if (!isTwoDigits(year)) {
      setIsValid((prev) => ({ ...prev, year: false }));
      setErrorMessage('2자리의 숫자를 입력해 주세요.');
      return false;
    }

    setIsValid((prev) => ({ ...prev, year: true }));
    return true;
  };

  return { handleExpirationDate, isValid, errorMessage };
};

const isNumber = (value: string) => {
  return !Number.isNaN(Number(value));
};

const isTwoDigits = (value: string) => {
  return value.length === 2;
};

const isValidMonth = (month: string) => {
  const monthNumber = Number(month);
  return monthNumber >= 1 && monthNumber <= 12;
};

export default useExpirationDate;
