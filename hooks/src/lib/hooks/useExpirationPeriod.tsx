import { useState } from 'react';
import { parseNumber } from '../utils/parseNumber';
import { checkValidDate } from '../utils/checkValidDate';

export type ExpirationPeriod = {
  month: string;
  year: string;
};

type ExpiryField = 'month' | 'year';

interface ValidationResult {
  message: string;
  field: ExpiryField | null;
}

const validateExpiry = (monthStr: string, yearStr: string, focusType: ExpiryField): ValidationResult => {
  const INVALID_DATE_MSG = '현재보다 이전값을 유효기간으로 선택할 수 없습니다.';
  const FORMAT_MSG = 'MM형식으로 입력해주세요. (ex. 01)';
  const MONTH_RANGE_MSG = '1~12사이의 올바른 월을 입력해 주세요.';

  const month = Number(monthStr);
  const year = Number(yearStr);
  const currentYear = Number(new Date().getFullYear().toString().slice(2));

  if (focusType === 'month') {
    if (monthStr.length < 2) return { message: FORMAT_MSG, field: 'month' };
    if (month < 1 || month > 12) return { message: MONTH_RANGE_MSG, field: 'month' };
  }

  if (focusType === 'year') {
    if (yearStr.length < 2) return { message: FORMAT_MSG, field: 'year' };
    if (year < currentYear) return { message: INVALID_DATE_MSG, field: 'year' };
  }

  const invalidField = checkValidDate(monthStr, yearStr);
  if (invalidField) {
    return { message: INVALID_DATE_MSG, field: invalidField };
  }

  if (focusType === 'month') {
    if (year < currentYear) return { message: INVALID_DATE_MSG, field: 'year' };
    if (yearStr.length < 2) return { message: FORMAT_MSG, field: 'year' };
  }

  if (focusType === 'year') {
    if (month < 1 || month > 12) return { message: MONTH_RANGE_MSG, field: 'month' };
    if (monthStr.length < 2) return { message: FORMAT_MSG, field: 'month' };
  }

  return { message: '', field: null };
};

function useExpirationPeriod() {
  const [expirationPeriod, setExpirationPeriod] = useState<ExpirationPeriod>({
    month: '',
    year: '',
  });
  const [isExpirationPeriodError, setExpirationPeriodError] = useState({
    month: false,
    year: false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeExpirationPeriod = (e: React.ChangeEvent<HTMLInputElement>, type: ExpiryField) => {
    const originValue = e.target.value;
    const value = parseNumber(originValue);

    if (value.length > 2) {
      return;
    }

    const nextPeriod = {
      ...expirationPeriod,
      [type]: value,
    };

    const { message, field } = validateExpiry(nextPeriod.month, nextPeriod.year, type);

    const isError = {
      month: false,
      year: false,
    };

    if (field) {
      isError[field] = true;
    }

    setExpirationPeriodError(isError);
    setErrorMessage(message);
    setExpirationPeriod(nextPeriod);
  };

  return {
    expirationPeriod,
    isExpirationPeriodError,
    onChangeExpirationPeriod,
    errorMessage,
  };
}

export default useExpirationPeriod;
