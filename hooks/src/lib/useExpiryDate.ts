import { ChangeEvent, FocusEvent, useState } from 'react';
import useValidation from './useValidation';
import { CENTURY_PREFIX, MONTH } from './constants';
import { validateNumber, validateFilledValue } from './utils/validators';
import { ErrorMessage, UseCardModuleProps, ValidationParam } from './types';

interface ValidationErrors {
  empty: string;
  number: string;
  year: string;
  month: string;
  date: string;
}

type ExpiryDateKey = 'month' | 'year';

interface ExpiryDate {
  month: string;
  year: string;
}
interface ExpiryDateError {
  month: boolean;
  year: boolean;
}

interface ExpiryDateValidationParam extends ValidationParam<ExpiryDate> {
  key: ExpiryDateKey;
}
// 연도에 대한 최대 기간 props로 받기
export default function useExpiryDate({ validationErrorMessages }: UseCardModuleProps<ValidationErrors>) {
  const [expiryDate, setExpiryDate] = useState<ExpiryDate>({ month: '', year: '' });
  const [error, setError] = useState<ExpiryDateError>({ month: false, year: false });
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(null);

  const today = new Date();

  const currentDate = {
    year: today.getFullYear() - CENTURY_PREFIX,
    month: today.getMonth() + 1,
  };

  const validateExpiryDateFilled = (value: ExpiryDate, key: ExpiryDateKey) => validateFilledValue(value[key]);

  const validateMonth = (value: ExpiryDate) => {
    const month = Number(value.month);
    const { startNumber, endNumber } = MONTH;
    return month >= startNumber && month <= endNumber;
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

  const changeEventValidators = (key: ExpiryDateKey) => [
    { test: (value: ExpiryDate) => validateNumber(value[key]), errorMessage: validationErrorMessages.number },
  ];
  const blurEventValidators = (key: ExpiryDateKey) => [
    { test: (value: ExpiryDate) => validateExpiryDateFilled(value, key), errorMessage: validationErrorMessages.empty },
    key === 'month'
      ? { test: validateMonth, errorMessage: validationErrorMessages.month }
      : { test: validateYear, errorMessage: validationErrorMessages.year },
    { test: validateDate, errorMessage: validationErrorMessages.date },
  ];

  const handleValidation = ({ value, key, validators }: ExpiryDateValidationParam) => {
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
