import { useEffect, useState } from 'react';

import { DATE_LENGTH, MAX_CARD_YEARS_FROM_NOW } from '../../constants';
import { DateError } from '../../types';
import { getNowYearAndMonth, validateFilledValue, validateNumber } from '../../utils';

export interface UseYearProps {
  year: string;
  maxYearsFromNow?: number;
}

export interface UseYearResult {
  isValid: boolean;
  error: DateError;
}

export default function useYear(props: UseYearProps): UseYearResult {
  const { year, maxYearsFromNow = MAX_CARD_YEARS_FROM_NOW } = props;
  const [error, setError] = useState<DateError>(null);
  const currentDate = getNowYearAndMonth();

  const validateAvailabilityOfYear = (value: string) => {
    const yearNumber = Number(value);
    const maxYear = currentDate.year + maxYearsFromNow;
    return yearNumber >= currentDate.year && yearNumber <= maxYear;
  };

  const validateYear = (value: string) => {
    if (!validateFilledValue(value)) return setError('empty');
    if (!validateNumber(value)) return setError('number');
    if (value.length !== DATE_LENGTH) return setError('length');
    if (!validateAvailabilityOfYear(value)) return setError('format');
    setError(null);
  };

  useEffect(() => {
    validateYear(year);
  }, [year]);

  return {
    isValid: error === null,
    error,
  };
}
