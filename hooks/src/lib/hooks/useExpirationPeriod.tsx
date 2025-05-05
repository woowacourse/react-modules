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

const validateExpiry = (
  monthStr: string,
  yearStr: string,
  focusType: ExpiryField
): ValidationResult => {
  const INVALID_DATE_MSG = '현재보다 이전값을 유효기간으로 선택할 수 없습니다.';
  const FORMAT_MSG = 'MM형식으로 입력해주세요. (ex. 01)';
  const MONTH_RANGE_MSG = '1~12사이의 올바른 월을 입력해 주세요.';

  const month = Number(monthStr);
  const year = Number(yearStr);
  const currentYear = Number(new Date().getFullYear().toString().slice(2));

  if (focusType === 'month') {
    if (monthStr.length < 2) return { message: FORMAT_MSG, field: 'month' };
    if (month < 1 || month > 12)
      return { message: MONTH_RANGE_MSG, field: 'month' };
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
    if (month < 1 || month > 12)
      return { message: MONTH_RANGE_MSG, field: 'month' };
    if (monthStr.length < 2) return { message: FORMAT_MSG, field: 'month' };
  }

  return { message: '', field: null };
};

function useExpirationPeriod() {
  const [value, setValue] = useState<ExpirationPeriod>({
    month: '',
    year: '',
  });
  const [isError, setIsError] = useState({
    month: false,
    year: false,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: ExpiryField
  ) => {
    const originValue = e.target.value;
    const parsedValue = parseNumber(originValue);

    if (parsedValue.length > 2) {
      return;
    }

    if (type === 'month') {
      const { message, field } = validateExpiry(parsedValue, value.year, type);

      const isError = field
        ? {
            month: type === 'month' ? false : false,
            year: false,
            [field]: true,
          }
        : { month: false, year: false };

      setIsError(isError);
      setErrorMessage(message);
    }

    if (type === 'year') {
      const { message, field } = validateExpiry(value.month, parsedValue, type);

      const isError = field
        ? {
            month: type === 'year' ? false : false,
            year: false,
            [field]: true,
          }
        : { month: false, year: false };

      setIsError(isError);
      setErrorMessage(message);
    }

    setValue((prev) => ({
      ...prev,
      [type]: parsedValue,
    }));
  };

  const cardExpirationPeriod = {
    value,
    isError,
    onChange,
    errorMessage,
  };
  return cardExpirationPeriod;
}

export default useExpirationPeriod;
