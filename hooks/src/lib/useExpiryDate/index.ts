import REGEXPS from '../constants/regExps';
import { useState } from 'react';
import useValidation from '../useValidation';

const EXPIRY_MONTH_LENGTH = 2;
const expiryMonthValidators = [
  (value: string) => {
    if (value.length !== EXPIRY_MONTH_LENGTH) {
      return '유효기간 월(月)은 2자리로 입력해 주세요.';
    }
  },
  (value: string) => {
    const isValidMonth = REGEXPS.dateMM.test(value);
    if (!isValidMonth) {
      return '유효기간 월(月)은 01월부터 12월 중 하나로 입력해 주세요.';
    }
  },
];

const EXPIRY_YEAR_LENGTH = 2;
const MIN_YEAR = 24;
const MAX_YEAR = 40;
const expiryYearValidators = [
  (value: string) => {
    if (value.length !== EXPIRY_YEAR_LENGTH) {
      return '유효기간 년도(年)는 2자리로 입력해 주세요';
    }
  },
  (value: string) => {
    const isValidYear = Number(value) >= MIN_YEAR && Number(value) <= MAX_YEAR;
    if (!isValidYear) {
      return '유효기간 년도(年)는 24년도부터 40년도 중 하나로 입력해 주세요';
    }
  },
];

export default function useExpiryDate() {
  const [expiryMonthValue, setExpiryMonthValue] = useState('');
  const { errorStatus: expiryMonthErrorStatus, validate: validateExpiryMonth } =
    useValidation<string>(expiryMonthValidators);

  const [expiryYearValue, setExpiryYearValue] = useState('');
  const { errorStatus: expiryYearErrorStatus, validate: validateExpiryYear } =
    useValidation<string>(expiryYearValidators);

  const setExpiryMonth = (string: string) => {
    setExpiryMonthValue(string);
    validateExpiryMonth(string);
  };

  const setExpiryYear = (string: string) => {
    setExpiryYearValue(string);
    validateExpiryYear(string);
  };

  return {
    expiryMonth: expiryMonthValue,
    setExpiryMonth,
    expiryMonthErrorStatus,
    expiryYear: expiryYearValue,
    setExpiryYear,
    expiryYearErrorStatus,
  };
}
