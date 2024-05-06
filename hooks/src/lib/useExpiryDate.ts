import { ChangeEventHandler, FocusEventHandler } from 'react';
import { Validations } from './types';
import useExpiryDateMonth from './useExpiryDateMonth';
import useExpiryDateYear from './useExpiryDateYear';

export interface ExpiryDate {
  month: string;
  year: string;
}

interface UseExpiryDateProps {
  initialValues: Record<keyof ExpiryDate, string>;
  validations: { month: Validations; year: Validations };
}

export default function useExpiryDate<E extends HTMLInputElement>({ initialValues, validations }: UseExpiryDateProps) {
  const {
    month,
    setMonth,
    isValid: isMonthValid,
    errorMessage: monthErrorMessage,
    handleChange: handleMonthChange,
    handleBlur: handleMonthBlur,
  } = useExpiryDateMonth({ initialValue: initialValues.month, validations: { ...validations.month } });

  const {
    year,
    setYear,
    isValid: isYearValid,
    errorMessage: yearErrorMessage,
    handleChange: handleYearChange,
    handleBlur: handleYearBlur,
  } = useExpiryDateYear({ initialValue: initialValues.year, validations: { ...validations.year } });

  const handleChange: ChangeEventHandler<E> = (e) => {
    const { name } = e.currentTarget;

    if (name === 'month') handleMonthChange(e);

    if (name === 'year') handleYearChange(e);
  };

  const handleBlur: FocusEventHandler<E> = (e) => {
    const { name } = e.currentTarget;

    if (name === 'month') handleMonthBlur(e);

    if (name === 'year') handleYearBlur(e);
  };

  const setExpiryDate = (value: string, name: string) => {
    name === 'month' ? setMonth(value) : setYear(value);
  };

  return {
    expiryDate: { month, year },
    isValid: { month: isMonthValid, year: isYearValid },
    setExpiryDate,
    errorMessage: (() => {
      if (!isMonthValid) return monthErrorMessage;
      if (!isYearValid) return yearErrorMessage;
      return null;
    })(),
    handleChange,
    handleBlur,
  };
}
