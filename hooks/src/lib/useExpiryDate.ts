import { ChangeEvent, FocusEvent } from 'react';
import useInput from '@/lib/useInput';
import {
  validateLengthOver,
  validateNumber,
  validateYear,
  validateMonth,
} from '@/validate/validate';
import {
  ExpiryDate,
  ExpiryDateError,
  ExpiryDateKeys,
} from '@/types/expiryDate';
import { EXPIRY_DATE_ERROR_MESSAGES } from '@/constants/error';
import { EXPIRY_DATE_LENGTH } from '@/constants/length';

const expiryDateValidates = (value: string) => {
  validateNumber(value);
  validateLengthOver(value, EXPIRY_DATE_LENGTH.MAX);
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
  const validLength = EXPIRY_DATE_LENGTH.MIN;
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
    month: errorStatusMonth && EXPIRY_DATE_ERROR_MESSAGES[errorStatusMonth],
    year: errorStatusYear && EXPIRY_DATE_ERROR_MESSAGES[errorStatusYear],
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
