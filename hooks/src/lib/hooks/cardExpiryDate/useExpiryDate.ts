import { useEffect, useState } from 'react';

import { DATE_LENGTH, INVALID_INPUT_VALUE } from '../../constants';
import { UseCardModuleReturn } from '../../types';

import useCardAvailability from './useCardAvailability';
import useMonth from './useMonth';
import useYear from './useYear';

export interface ExpiryDate {
  month: string;
  year: string;
}

export type ExpiryDateKey = 'month' | 'year' | undefined;
export interface ExpiryDateErrorMessages {
  empty: string;
  number: string;
  length: string;
  yearFormat: string;
  monthFormat: string;
  availability: string;
}

export type ExpiryDateValidationErrorMessage = null | {
  month: string | null;
  year: string | null;
  availability: string | null;
};

export type ExpiryDateValidationErrorMessageKey = 'month' | 'year' | 'availability' | null;

export interface UseExpiryDateProps {
  expiryDate: ExpiryDate;
  errorMessages: ExpiryDateErrorMessages;
  validation: {
    maxYearsFromNow: number;
  };
  isNeedValidValue: boolean;
}
export type ExpiryDateError = 'empty' | 'length' | 'number' | 'format' | null;
export interface UseExpiryDateResult {
  month: {
    isValid: boolean;
    error: ExpiryDateError;
  };
  year: {
    isValid: boolean;
    error: ExpiryDateError;
  };
  isValidAvailability: boolean;
}
export type UseExpiryDateReturn = UseCardModuleReturn<
  ExpiryDateValidationErrorMessage,
  UseExpiryDateResult,
  ExpiryDate
>;

export default function useExpiryDate(props: UseExpiryDateProps): UseExpiryDateReturn {
  const { expiryDate, errorMessages, validation, isNeedValidValue } = props;

  const { isValid: isValidMonth, error: monthError } = useMonth({
    month: expiryDate.month,
  });

  const { isValid: isValidYear, error: yearError } = useYear({
    year: expiryDate.year,
    maxYearsFromNow: validation.maxYearsFromNow,
  });

  const { isValid: isValidAvailability } = useCardAvailability({
    expiryDate,
  });

  const [validationErrorMessage, setValidationErrorMessage] = useState<ExpiryDateValidationErrorMessage>(null);

  const getValidationErrorMessageKey = (key: ExpiryDateKey) => {
    const targetError = key === 'month' ? monthError : yearError;

    if (targetError === 'empty') return 'empty';
    if (targetError === 'number') return 'number';
    if (targetError === 'length') return 'length';
    if (targetError === 'format') {
      return key === 'month' ? 'monthFormat' : 'yearFormat';
    }

    return null;
  };

  const updateErrorMessages = () => {
    const monthErrorKey = getValidationErrorMessageKey('month');
    const yearErrorKey = getValidationErrorMessageKey('year');

    setValidationErrorMessage({
      month: monthErrorKey ? errorMessages[monthErrorKey] : null,
      year: yearErrorKey ? errorMessages[yearErrorKey] : null,
      availability: !isValidAvailability ? errorMessages.availability : null,
    });
  };

  const formatValue = (value: string) => {
    return value ? value.slice(0, DATE_LENGTH) : value;
  };

  const getFormattedValue = () => {
    const formattedMonth = formatValue(expiryDate.month);
    const formattedYear = formatValue(expiryDate.year);

    if (isNeedValidValue) {
      return {
        month: monthError === 'number' ? INVALID_INPUT_VALUE : formattedMonth,
        year: yearError === 'number' ? INVALID_INPUT_VALUE : formattedYear,
      };
    }

    return {
      month: formattedMonth,
      year: formattedYear,
    };
  };

  useEffect(() => {
    updateErrorMessages();
  }, [monthError, yearError, isValidAvailability]);

  return {
    validationErrorMessage,
    validationResult: {
      month: {
        isValid: isValidMonth,
        error: monthError,
      },
      year: {
        isValid: isValidYear,
        error: yearError,
      },
      isValidAvailability,
    },
    formattedValue: getFormattedValue(),
  };
}
