import { useEffect, useState } from 'react';

import { getNowYearAndMonth } from '../../utils';

import { ExpiryDate } from './useExpiryDate';

export interface UseCardAvailabilityProps {
  expiryDate: ExpiryDate;
}

export interface UseCardAvailabilityResult {
  isValid: boolean;
}

export default function useCardAvailability(props: UseCardAvailabilityProps): UseCardAvailabilityResult {
  const { expiryDate } = props;
  const [isValid, setIsValid] = useState(true);
  const currentDate = getNowYearAndMonth();

  const validateAvailability = (value: { month: string; year: string }) => {
    const year = Number(value.year);
    const month = Number(value.month);

    const isOverYear = year > currentDate.year;
    const isOverMonth = year === currentDate.year && month >= currentDate.month;

    setIsValid(isOverYear || isOverMonth);
  };

  useEffect(() => {
    validateAvailability(expiryDate);
  }, [expiryDate]);

  return {
    isValid,
  };
}
