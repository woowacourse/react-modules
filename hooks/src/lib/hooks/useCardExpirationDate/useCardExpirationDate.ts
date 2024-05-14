import { useState } from 'react';
import { isNotNumber, isValidNumberRange, validateExpiredDate } from '../../utils/validation/validation';
import type { EXPIRED_TYPE } from '../..//utils/validation/validation.type';
import { formatMonth } from '../../utils/formatMonth';

export const EXPIRATION_DATE_ERROR_MESSAGES = {
  NOT_NUMBER: '숫자를 입력해주세요.',
  INVALID_MONTH: '유효하지 않은 달입니다.',
  INVALID_YEAR: '유효하지 않은 년도입니다.',
  EXPIRED_DATE: '이미 만료된 카드입니다.',
};

type Date<T> = {
  month: T;
  year: T;
};

const VALID_DATE_LENGTH = 2;

export type useCardExpirationDateProps = {
  month?: string;
  year?: string;
};

const useCardExpirationDate = ({ month = '', year = '' }: useCardExpirationDateProps = {}) => {
  const [date, setDate] = useState<Date<string>>({ month, year });
  const [isValid, setIsValid] = useState<Date<boolean>>({ month: false, year: false });
  const [errorMessages, setErrorMessages] = useState<Date<string>>({ month: '', year: '' });

  const getMonthErrorMessage = (month: string, isExpiredDate: EXPIRED_TYPE) => {
    if (isNotNumber(month)) return EXPIRATION_DATE_ERROR_MESSAGES.NOT_NUMBER;

    if (month.length < VALID_DATE_LENGTH) return '';

    if (!isValidNumberRange(Number(month), 1, 12)) return EXPIRATION_DATE_ERROR_MESSAGES.INVALID_MONTH;

    if (isExpiredDate === 'INVALID_MONTH') return EXPIRATION_DATE_ERROR_MESSAGES.EXPIRED_DATE;

    return '';
  };

  const getYearErrorMessage = (year: string, isExpiredDate: EXPIRED_TYPE) => {
    if (isNotNumber(year)) return EXPIRATION_DATE_ERROR_MESSAGES.NOT_NUMBER;

    if (year.length < VALID_DATE_LENGTH) return '';

    if (isExpiredDate === 'INVALID_YEAR') return EXPIRATION_DATE_ERROR_MESSAGES.EXPIRED_DATE;

    return '';
  };

  const checkValidDate = ({ month = date.month, year = date.year }) => {
    const isExpiredDate = validateExpiredDate(month, year);

    const monthErrorMessage = getMonthErrorMessage(month, isExpiredDate);
    const yearErrorMessage = getYearErrorMessage(year, isExpiredDate);

    setErrorMessages({ month: monthErrorMessage, year: yearErrorMessage });
    setIsValid({
      month: monthErrorMessage === '' && month.length === VALID_DATE_LENGTH,
      year: yearErrorMessage === '' && year.length === VALID_DATE_LENGTH,
    });
  };

  const handleMonthChange = (month: string) => {
    const formattedMonth = formatMonth(month);
    if (!isNotNumber(month)) setDate({ ...date, month: formattedMonth });

    checkValidDate({ month: formattedMonth });
  };

  const handleYearChange = (year: string) => {
    if (!isNotNumber(year)) setDate({ ...date, year });

    checkValidDate({ year });
  };

  return {
    month: date.month,
    year: date.year,
    handleMonthChange,
    handleYearChange,
    monthErrorMessage: errorMessages.month,
    yearErrorMessage: errorMessages.year,
    isValidMonth: isValid.month,
    isValidYear: isValid.year,
  };
};

export default useCardExpirationDate;
