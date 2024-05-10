import { useState } from 'react';
import {
  isNotNumber,
  isValidNumberLength,
  isValidNumberRange,
  validateExpiredDate,
} from '../../utils/validation/validation';
import type { EXPIRED_TYPE } from '../..//utils/validation/validation.type';

type Date<T> = { month: T; year: T };

const DATE_DEFAULT_LENGTH = 2;

export const EXPIRATION_DATE_ERROR_MESSAGES = {
  NOT_NUMBER: 'NOT_NUMBER',
  INVALID_MONTH: 'INVALID_MONTH',
  INVALID_YEAR: 'INVALID_YEAR',
  EXPIRED_DATE: 'EXPIRED_DATE',
};

const useCardExpirationDate = (initialMonthValue: string = '', initialYearValue: string = '') => {
  const [date, setDate] = useState<Date<string>>({ month: initialMonthValue, year: initialYearValue });
  const [isValid, setIsValid] = useState<Date<boolean>>({ month: false, year: false });
  const [errorMessages, setErrorMessages] = useState<Date<string>>({ month: '', year: '' });

  const getMonthErrorMessage = (month: string, isExpiredDate: EXPIRED_TYPE) => {
    if (isNotNumber(month)) return EXPIRATION_DATE_ERROR_MESSAGES.NOT_NUMBER;
    if (!isValidNumberRange(Number(month), 1, 12)) return EXPIRATION_DATE_ERROR_MESSAGES.INVALID_MONTH;
    if (isExpiredDate === 'INVALID_MONTH') return EXPIRATION_DATE_ERROR_MESSAGES.EXPIRED_DATE;

    return '';
  };

  const getYearErrorMessage = (year: string, isExpiredDate: EXPIRED_TYPE) => {
    if (isNotNumber(year)) return EXPIRATION_DATE_ERROR_MESSAGES.NOT_NUMBER;
    if (!isValidNumberLength(year, DATE_DEFAULT_LENGTH)) return EXPIRATION_DATE_ERROR_MESSAGES.INVALID_YEAR;
    if (isExpiredDate === 'INVALID_YEAR') return EXPIRATION_DATE_ERROR_MESSAGES.EXPIRED_DATE;

    return '';
  };

  const validateDate = ({ month = date.month, year = date.year }) => {
    const isExpiredDate = validateExpiredDate(month, year);

    const monthErrorMessage = getMonthErrorMessage(month, isExpiredDate);
    const yearErrorMessage = getYearErrorMessage(year, isExpiredDate);

    setErrorMessages({ month: monthErrorMessage, year: yearErrorMessage });
    setIsValid({ month: !monthErrorMessage, year: !yearErrorMessage });
  };

  const formatMonth = (month: string) => (isValidNumberRange(Number(month), 2, 9) ? month.padStart(2, '0') : month);

  const handleMonthChange = (month: string) => {
    if (month.length > DATE_DEFAULT_LENGTH) return;

    validateDate({ month });

    if (isNotNumber(month)) return;

    setDate({ ...date, month: formatMonth(month) });
  };

  const handleYearChange = (year: string) => {
    if (year.length > DATE_DEFAULT_LENGTH) return;

    validateDate({ year });

    if (isNotNumber(year)) return;

    setDate({ ...date, year });
  };

  return {
    month: date.month,
    year: date.year,
    handleMonthChange,
    handleYearChange,
    monthErrorMessages: errorMessages.month,
    yearErrorMessages: errorMessages.year,
    isValidMonth: isValid.month,
    isValidYear: isValid.year,
  };
};

export default useCardExpirationDate;
