import { useState, useEffect } from 'react';
import { getNowYearAndMonth } from './utils';

interface UseCardAvailabilityProps {
  expiryDate: {
    month: string;
    year: string;
  };
}

interface UseCardAvailabilityResult {
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
