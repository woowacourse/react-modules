import { ChangeEvent, useState } from 'react';
import { EXPIRY_DATE_KEY, ExpiryDateKey } from './constants';

function useExpiryDate() {
  const [expiryDate, setExpiryDate] = useState<Record<ExpiryDateKey, string>>({
    month: '',
    year: '',
  });

  const [isValid, setIsValid] = useState<Record<ExpiryDateKey, boolean>>({
    month: true,
    year: true,
  });

  const [errorMessage, setErrorMessage] = useState<string>('');

  const checkIsNumber = (value: string) => {
    const regex = /^[0-9]*$/;
    return regex.test(value);
  };

  const checkIsValidLength = (value: string) => {
    return value.length === 2;
  };

  const checkIsMonthInRange = (value: string) => {
    return Number(value) >= 1 && Number(value) <= 12;
  };

  const checkIsExpiredDate = (month: string, year: string) => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;

    const expiryYear = 2000 + Number(year);
    const expiryMonth = Number(month);

    if (expiryYear < currentYear) return true;
    if (expiryYear === currentYear && expiryMonth <= currentMonth) return true;
    return false;
  };

  const validateExpiryDate = (name: string, value: string) => {
    const isNumber = checkIsNumber(value);
    const isValidLength = checkIsValidLength(value);
    const isMonthInRange = checkIsMonthInRange(value);

    if (!isNumber) {
      setIsValid((prev) => ({ ...prev, [name]: false }));
      setErrorMessage('숫자만 입력해주세요.');
      return;
    }

    if (!isValidLength) {
      setIsValid((prev) => ({ ...prev, [name]: false }));
      setErrorMessage('유효기간은 두 자리만 입력해야 합니다.');
      return;
    }

    if (name === EXPIRY_DATE_KEY.month && !isMonthInRange) {
      setIsValid((prev) => ({ ...prev, [name]: false }));
      setErrorMessage('유효한 월(1~12)을 입력해야 합니다.');
      return;
    }

    setIsValid((prev) => ({ ...prev, [name]: true }));
    setErrorMessage('');
  };

  const validateIsExpiredDate = (name: ExpiryDateKey, value: string) => {
    const { month, year } = expiryDate;
    const targetMonth = name === EXPIRY_DATE_KEY.month ? value : month;
    const targetYear = name === EXPIRY_DATE_KEY.year ? value : year;
    const isExpiredDate = checkIsExpiredDate(targetMonth, targetYear);

    if (isExpiredDate) {
      setIsValid((prev) => ({ ...prev, [name]: false }));
      setErrorMessage('유효기간은 현재 날짜 이후로 입력해야 합니다.');
      return;
    }
  };

  const handleExpiryDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExpiryDate((prev) => ({ ...prev, [name]: value }));
  };

  return {
    expiryDate,
    isValid,
    errorMessage,
    validateExpiryDate,
    validateIsExpiredDate,
    handleExpiryDateChange,
  };
}

export default useExpiryDate;
