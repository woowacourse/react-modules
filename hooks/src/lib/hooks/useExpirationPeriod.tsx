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
  yearStr: string
): ValidationResult => {
  const INVALID_DATE_MSG = '현재보다 이전값을 유효기간으로 선택할 수 없습니다.';
  const FORMAT_MSG = 'MM형식으로 입력해주세요. (ex. 01)';
  const MONTH_RANGE_MSG = '1~12사이의 올바른 월을 입력해 주세요.';

  if (monthStr === '' && yearStr === '') return { message: '', field: null };

  const month = Number(monthStr);
  const year = Number(yearStr);
  const currentYear = Number(new Date().getFullYear().toString().slice(2));

  if (monthStr.length < 2) return { message: FORMAT_MSG, field: 'month' };
  if (month < 1 || month > 12)
    return { message: MONTH_RANGE_MSG, field: 'month' };

  if (yearStr.length < 2) return { message: FORMAT_MSG, field: 'year' };
  if (year < currentYear) return { message: INVALID_DATE_MSG, field: 'year' };

  const invalidField = checkValidDate(monthStr, yearStr);
  if (invalidField) {
    return { message: INVALID_DATE_MSG, field: invalidField };
  }

  if (year < currentYear) return { message: INVALID_DATE_MSG, field: 'year' };
  if (yearStr.length < 2) return { message: FORMAT_MSG, field: 'year' };

  if (month < 1 || month > 12)
    return { message: MONTH_RANGE_MSG, field: 'month' };
  if (monthStr.length < 2) return { message: FORMAT_MSG, field: 'month' };

  return { message: '', field: null };
};

function useExpirationPeriod() {
  const [value, setValue] = useState<ExpirationPeriod>({
    month: '',
    year: '',
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: ExpiryField
  ) => {
    const originValue = e.target.value;
    const parsedValue = parseNumber(originValue);

    if (parsedValue.length > 2) {
      return;
    }

    setValue((prev) => ({
      ...prev,
      [type]: parsedValue,
    }));
  };

  const { message: errorMessage, field } = validateExpiry(
    value.month,
    value.year
  );

  const isError = field
    ? {
        month: false,
        year: false,
        [field]: true,
      }
    : { month: false, year: false };

  const cardExpirationPeriod = {
    value,
    isError,
    onChange,
    errorMessage,
  };
  return cardExpirationPeriod;
}

export default useExpirationPeriod;
