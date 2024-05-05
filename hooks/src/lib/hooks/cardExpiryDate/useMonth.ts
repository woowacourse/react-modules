import { useEffect, useState } from 'react';

import { DATE_LENGTH, MONTH } from '../../constants';
import { DateError } from '../../types';
import { validateFilledValue, validateNumber } from '../../utils';

export interface UseMonthProps {
  month: string;
}

export interface UseMonthResult {
  isValid: boolean;
  error: DateError;
}

export default function useMonth(props: UseMonthProps): UseMonthResult {
  const { month } = props;
  const [error, setError] = useState<DateError>(null);

  const validateAvailabilityOfMonth = (value: string) => {
    const monthNumber = Number(value);
    const { startNumber, endNumber } = MONTH;
    return monthNumber >= startNumber && monthNumber <= endNumber;
  };

  const validateMonth = (value: string) => {
    if (!validateFilledValue(value)) return setError('empty');
    if (!validateNumber(value)) return setError('number');
    if (value.length !== DATE_LENGTH) return setError('length');
    if (!validateAvailabilityOfMonth(value)) return setError('format');
    setError(null);
  };

  useEffect(() => {
    validateMonth(month);
  }, [month]);

  return {
    isValid: error === null,
    error,
  };
}
