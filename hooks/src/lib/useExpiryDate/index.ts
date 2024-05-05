import { useMemo, useState } from 'react';

import REGEXPS from '../constants/regExps';
import { Validator } from '../type';
import getErrorMessage from '../utils/getErrorMessage';
import getOnChange from '../utils/getOnChange';

export default function useExpiryDate() {
  const [expiryMonth, setExpiryMonth] = useState('');
  const onChangeExpiryMonth = getOnChange(setExpiryMonth);

  const [expiryYear, setExpiryYear] = useState('');
  const onChangeExpiryYear = getOnChange(setExpiryYear);

  const expiryMonthErrorMessage = useMemo(() => {
    return getErrorMessage(expiryMonth, expiryMonthValidators);
  }, [expiryMonth]);
  const isValidExpiryMonth = expiryMonthErrorMessage === null;

  const expiryYearErrorMessage = useMemo(() => {
    return getErrorMessage(expiryYear, expiryYearValidators);
  }, [expiryYear]);
  const isValidExpiryYear = expiryYearErrorMessage === null;

  const expiryDateErrorMessage = getErrorMessage(
    [expiryMonth, expiryYear],
    expiryDateValidators
  );
  const isValidExpiryDate = expiryDateErrorMessage === null;

  return {
    expiryMonth,
    expiryYear,
    setExpiryMonth,
    setExpiryYear,
    onChangeExpiryMonth,
    onChangeExpiryYear,
    expiryMonthErrorMessage,
    expiryYearErrorMessage,
    expiryDateErrorMessage,
    isValidExpiryMonth,
    isValidExpiryYear,
    isValidExpiryDate,
  };
}

const EXPIRY_MONTH_LENGTH = 2;
const EXPIRY_YEAR_LENGTH = 2;

export const EXPIRY_MONTH_ERROR_MESSAGE = {
  notDigit: '유효기간 월(月)은 숫자만 포함해야 합니다.',
  invalidLength: `유효기간 월(月)은 ${EXPIRY_MONTH_LENGTH}자리로 입력해 주세요.`,
  notDateMM: '유효기간 월(月)은 01월부터 12월 중 하나로 입력해 주세요.',
} as const;

export const EXPIRY_YEAR_ERROR_MESSAGE = {
  notDigit: '유효기간 년도(年)는 숫자만 포함해야 합니다.',
  invalidLength: `유효기간 년도(年)는 ${EXPIRY_YEAR_LENGTH}자리로 입력해 주세요.`,
} as const;

export const EXPIRY_DATE_ERROR_MESSAGE = {
  expiredDate: `만료된 유효기간 입니다.`,
} as const;

type MonthErrorMessage =
  (typeof EXPIRY_MONTH_ERROR_MESSAGE)[keyof typeof EXPIRY_MONTH_ERROR_MESSAGE];

type YearErrorMessage =
  (typeof EXPIRY_YEAR_ERROR_MESSAGE)[keyof typeof EXPIRY_YEAR_ERROR_MESSAGE];

type DateErrorMessage =
  (typeof EXPIRY_DATE_ERROR_MESSAGE)[keyof typeof EXPIRY_DATE_ERROR_MESSAGE];

const expiryMonthValidators: Validator<string, MonthErrorMessage>[] = [
  {
    checkIsValid: (month: string) => REGEXPS.onlyDigitNumber.test(month),
    message: EXPIRY_MONTH_ERROR_MESSAGE.notDigit,
  },
  {
    checkIsValid: (month: string) => month.length !== EXPIRY_MONTH_LENGTH,
    message: EXPIRY_MONTH_ERROR_MESSAGE.invalidLength,
  },
  {
    checkIsValid: (month: string) => REGEXPS.dateMM.test(month),
    message: EXPIRY_MONTH_ERROR_MESSAGE.notDateMM,
  },
];

const expiryYearValidators: Validator<string, YearErrorMessage>[] = [
  {
    checkIsValid: (year: string) => REGEXPS.onlyDigitNumber.test(year),
    message: EXPIRY_YEAR_ERROR_MESSAGE.notDigit,
  },
  {
    checkIsValid: (year: string) => year.length === EXPIRY_YEAR_LENGTH,
    message: EXPIRY_YEAR_ERROR_MESSAGE.notDigit,
  },
];

const expiryDateValidators: Validator<[string, string], DateErrorMessage>[] = [
  {
    checkIsValid: ([month, year]) => {
      const inputMonth = Number(month) - 1;
      const inputYear = Number(year) + 2000;
      const inputDate = new Date(inputYear, inputMonth);

      return inputDate < new Date();
    },
    message: EXPIRY_DATE_ERROR_MESSAGE.expiredDate,
  },
];
