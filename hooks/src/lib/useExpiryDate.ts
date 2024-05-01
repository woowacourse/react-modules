import { ChangeEvent, FocusEvent, useState } from 'react';
import useValidation from './useValidation';

const CENTURY_PREFIX = 2000;

interface ValidationErrors {
  empty: string;
  number: string;
  year: string;
  month: string;
  date: string;
}

interface UserCardHolderProps {
  validationErrors: ValidationErrors;
}
type ExpiryDateKey = 'month' | 'year';

export default function useExpiryDate({ validationErrors }: UserCardHolderProps) {
  interface ExpiryDate {
    month: string;
    year: string;
  }
  interface ExpiryDateError {
    month: boolean;
    year: boolean;
  }

  const [expiryDate, setExpiryDate] = useState<ExpiryDate>({ month: '', year: '' });
  const [error, setError] = useState<ExpiryDateError>({ month: false, year: false });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const today = new Date();

  const currentDate = {
    year: today.getFullYear() - CENTURY_PREFIX,
    month: today.getMonth() + 1,
  };

  const validateNumber = (value: ExpiryDate, key: ExpiryDateKey) => {
    return Number.isInteger(Number(value[key]));
  };

  const validateMonth = (value: ExpiryDate) => {
    const month = Number(value.month);
    return month >= 1 && month <= 12;
  };

  const validateYear = (value: ExpiryDate) => {
    return Number(value.year) >= currentDate.year;
  };

  const validateDate = (value: ExpiryDate) => {
    const year = Number(value.year);
    const month = Number(value.month);

    const isOverYear = year > currentDate.year;
    const isOverMonth = year == currentDate.year && month >= currentDate.month;

    return isOverYear || isOverMonth;
  };

  const validateFilledValue = (value: ExpiryDate, key: ExpiryDateKey) => !!value[key];

  const changeEventValidators = (key: ExpiryDateKey) => [
    { test: (value: ExpiryDate) => validateNumber(value, key), errorMessage: validationErrors.number },
  ];
  const blurEventValidators = (key: ExpiryDateKey) => [
    { test: (value: ExpiryDate) => validateFilledValue(value, key), errorMessage: validationErrors.empty },
    key === 'month'
      ? { test: validateMonth, errorMessage: validationErrors.month }
      : { test: validateYear, errorMessage: validationErrors.year },
    { test: validateDate, errorMessage: validationErrors.date },
  ];

  interface Param {
    value: ExpiryDate;
    key: ExpiryDateKey;
    validators: {
      test: (value: ExpiryDate) => boolean;
      errorMessage: string;
    }[];
  }
  const handleValidation = ({ value, key, validators }: Param) => {
    const result = useValidation<ExpiryDate>({ validators, value });

    setExpiryDate((prev) => ({
      ...prev,
      [key]: value[key],
    }));

    setError((prev) => ({
      ...prev,
      [key]: !!result.isValid,
    }));

    setErrorMessage(result.isValid ? null : result.errorMessage);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>, key: ExpiryDateKey) => {
    handleValidation({ value: { ...expiryDate, [key]: e.target.value }, validators: changeEventValidators(key), key });
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>, key: ExpiryDateKey) => {
    handleValidation({ value: { ...expiryDate, [key]: e.target.value }, validators: blurEventValidators(key), key });
  };

  const updateValue = (value: string, key: ExpiryDateKey) => {
    const validators = [...blurEventValidators(key)].splice(1, 0, changeEventValidators(key)[0]);
    handleValidation({ value: { ...expiryDate, [key]: value }, validators, key });
  };

  return { expiryDate, handleChange, handleBlur, updateValue, errorMessage, error };
}
