import { useState } from 'react';
import { DATE, MAX_LENGTH, REGEX } from './constants';

interface ValidationResult {
  isValidMonth: boolean;
  monthErrorMessage?: string[];

  isValidYear: boolean;
  yearErrorMessage?: string[];
}

const useExpiryDateValidation = () => {
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValidMonth: true,
    monthErrorMessage: [],

    isValidYear: true,
    yearErrorMessage: [],
  });

  const handleExpiryDateChange = (month: string, year: string) => {
    const monthErrors: string[] = [];
    const yearErrors: string[] = [];
    const isMonthNumeric = REGEX.onlyNumber.test(month);
    const isYearNumeric = REGEX.onlyNumber.test(year);
    const isValidMonthLength = month.length === MAX_LENGTH.expiryMonth;
    const isValidYearLength = year.length === MAX_LENGTH.expiryYear;

    const currentYear = new Date().getFullYear() - 2000;
    const currentMonth = new Date().getMonth() + 1;

    if (!isMonthNumeric) {
      monthErrors.push('숫자로 입력해주세요.');
    } else {
      const monthNumber = parseInt(month, 10);
      if (monthNumber < DATE.minMonth || monthNumber > DATE.maxMonth) {
        monthErrors.push(`올바른 월을 입력해주세요 (01~12).`);
      }
    }

    if (!isYearNumeric) {
      yearErrors.push('숫자로 입력해주세요.');
    }

    if (!isValidMonthLength) {
      monthErrors.push(`${MAX_LENGTH.expiryMonth}자로 입력해주세요.`);
    }

    if (!isValidYearLength) {
      yearErrors.push(`${MAX_LENGTH.expiryYear}자로 입력해주세요.`);
    }

    if (isMonthNumeric && isYearNumeric && isValidMonthLength && isValidYearLength) {
      const inputYear = parseInt(year, 10);
      const inputMonth = parseInt(month, 10);

      if (inputYear < currentYear) {
        yearErrors.push('만료된 카드입니다.');
      }

      if (inputYear === currentYear && inputMonth < currentMonth) {
        monthErrors.push('만료된 카드입니다.');
      }
    }

    setValidationResult({
      isValidMonth: isMonthNumeric && isValidMonthLength && monthErrors.length === 0,
      monthErrorMessage: monthErrors,

      isValidYear: isYearNumeric && isValidYearLength && yearErrors.length === 0,
      yearErrorMessage: yearErrors,
    });
  };

  return { validationResult, handleExpiryDateChange };
};

export default useExpiryDateValidation;
