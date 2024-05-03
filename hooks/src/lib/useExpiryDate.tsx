import useInput from './useInput';
import {
  validateLengthOver,
  validateNumber,
  validateYear,
  validateMonth,
} from '../validate/validate';
import { ChangeEvent, FocusEvent } from 'react';
import {
  ExpiryDate,
  ExpiryDateError,
  ExpiryDateKeys,
} from '../types/expiryDate';
import { ExpiryDateErrorMessages } from '../constants/error';

const expiryDateValidates = (value: string) => {
  validateNumber(value);
  validateLengthOver(value, 2);
};

const monthValidates = (value: string) => {
  expiryDateValidates(value);
  validateMonth(value);
};

const yearValidates = (value: string) => {
  expiryDateValidates(value);
  validateYear(value);
};

const useExpiryDate = (initialValue: ExpiryDate) => {
  const validLength = 1;
  const {
    value: monthValue,
    onChange: onChangeMonth,
    onBlurValidLength: onBlurMonth,
    errorStatus: errorStatusMonth,
  } = useInput<ExpiryDateError>(
    initialValue.month,
    monthValidates,
    validLength
  );

  const {
    value: yearValue,
    onChange: onChangeYear,
    onBlurValidLength: onBlurYear,
    errorStatus: errorStatusYear,
  } = useInput<ExpiryDateError>(initialValue.year, yearValidates, validLength);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    name === 'month' ? onChangeMonth(e) : onChangeYear(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    name === 'month' ? onBlurMonth(e) : onBlurYear(e);
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
    onBlur: handleBlur,
    errorMessages,
  };
};

export default useExpiryDate;
