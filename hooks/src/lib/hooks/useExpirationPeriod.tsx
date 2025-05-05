import { useState } from 'react';
import { parseNumber } from '../utils/parseNumber';

export type ExpirationPeriod = {
  month: string;
  year: string;
};

type ExpiryField = 'month' | 'year';

interface ValidationResult {
  message: string;
  field: ExpiryField | null;
}

type TestType = {
  monthString?: string;
  yearString?: string;
  month?: number;
  year?: number;
};

type Rule = {
  test: ({ monthString, yearString, month, year }: TestType) => boolean;
  field: 'month' | 'year';
  message: string;
};

const MESSAGE = {
  INVALID_DATE_MSG: '현재보다 이전값을 유효기간으로 선택할 수 없습니다.',
  FORMAT_MONTH_MSG: 'MM형식으로 입력해주세요. (ex. 01)',
  FORMAT_YEAR_MSG: 'YY형식으로 입력해주세요. (ex. 01)',
  MONTH_RANGE_MSG: '1~12사이의 올바른 월을 입력해 주세요.',
};

const expiryRules: Rule[] = [
  {
    test: ({ monthString }) => {
      if (!monthString) return false;
      return monthString.length === 2;
    },
    field: 'month',
    message: MESSAGE.FORMAT_MONTH_MSG,
  },
  {
    test: ({ yearString }) => {
      if (!yearString) return false;
      return yearString.length === 2;
    },
    field: 'year',
    message: MESSAGE.FORMAT_YEAR_MSG,
  },
  {
    test: ({ month }) => {
      if (!month) return false;
      return month >= 1 && month <= 12;
    },
    field: 'month',
    message: MESSAGE.MONTH_RANGE_MSG,
  },
  {
    test: ({ year }) => {
      const currentYear = Number(new Date().getFullYear().toString().slice(2));
      if (!year) return false;
      return year >= currentYear;
    },
    field: 'year',
    message: MESSAGE.INVALID_DATE_MSG,
  },
  {
    test: ({ month, year }) => {
      const now = new Date();
      const currentYear = Number.parseInt(
        new Date().getFullYear().toString().slice(2),
        10
      );
      const currentMonth = now.getMonth() + 1;

      if (!month || !year) return false;

      if (currentYear < year) return true;
      return currentYear === year && month >= currentMonth;
    },
    field: 'month',
    message: MESSAGE.INVALID_DATE_MSG,
  },
];

const validateExpiry = (
  monthString: string,
  yearString: string
): ValidationResult => {
  if (monthString === '' && yearString === '')
    return { message: '', field: null };

  const month = Number(monthString);
  const year = Number(yearString);

  const invalid = expiryRules.find(
    (rule) => !rule.test({ monthString, yearString, month, year })
  );

  if (invalid) {
    return { message: invalid.message, field: invalid.field };
  }
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
