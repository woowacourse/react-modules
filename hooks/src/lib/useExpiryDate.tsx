import useInput from './useInput';
import {
  validateLength,
  validateNumber,
  validateYear,
  validateMonth,
} from '../validate/validate';
import { ChangeEvent } from 'react';
import {
  ExpiryDateType,
  ExpiryDateErrorType,
  ExpiryDateKeys,
} from '../types/expiryDate';
import { ExpiryDateErrorMessages } from '../constants/error';

const expiryDateValidates = (value: string) => {
  validateNumber(value);
  validateLength(value, 2);
};

const monthValidates = (value: string) => {
  validateNumber(value);
  validateLength(value, 2);
  validateMonth(value);
};

const yearValidates = (value: string) => {
  expiryDateValidates(value);
  validateYear(value);
};

const useExpiryDate = (initialValue: ExpiryDateType) => {
  const {
    value: monthValue,
    onChange: onChangeMonth,
    errorStatus: errorStatusMonth,
  } = useInput<ExpiryDateErrorType>(initialValue.month, monthValidates);

  const {
    value: yearValue,
    onChange: onChangeYear,
    errorStatus: errorStatusYear,
  } = useInput<ExpiryDateErrorType>(initialValue.year, yearValidates);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    name === 'month' ? onChangeMonth(e) : onChangeYear(e);
  };

  const errorMessages = {
    month: errorStatusMonth && ExpiryDateErrorMessages[errorStatusMonth],
    year: errorStatusYear && ExpiryDateErrorMessages[errorStatusYear],
  };

  for (const key in errorMessages) {
    if (errorMessages[key as ExpiryDateKeys] === null) {
      delete errorMessages[key as ExpiryDateKeys];
    }
  }

  return {
    values: {
      month: monthValue,
      year: yearValue,
    },
    onChange: handleChange,
    errorMessages,
  };
};

export default useExpiryDate;
