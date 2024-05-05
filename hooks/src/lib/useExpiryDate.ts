import { useEffect, useState } from 'react';
import { DATE_LENGTH, INVALID_INPUT_VALUE, MAX_CARD_YEARS_FROM_NOW, MONTH } from './constants';
import { validateFilledValue, validateNumber, getNowYearAndMonth } from './utils';
import { UseCardModuleReturn } from './types';

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

// 연도에 대한 최대 기간 props로 받기
export default function useExpiryDate(props: UseExpiryDateProps): UseExpiryDateReturn {
  const { expiryDate, errorMessages, validation, isNeedValidValue } = props;

  const [monthError, setMonthError] = useState<ExpiryDateError>(null);
  const [yearError, setYearError] = useState<ExpiryDateError>(null);
  const [availabilityError, setAvailabilityError] = useState(false);
  const [validationErrorMessage, setValidationErrorMessage] = useState<ExpiryDateValidationErrorMessage>(null);

  const currentDate = getNowYearAndMonth();

  const validateDateValue = (
    value: string,
    validateFormat: (value: string) => boolean,
    setError: (error: ExpiryDateError) => void,
  ) => {
    if (!validateFilledValue(value)) {
      return setError('empty');
    }
    if (!validateNumber(value)) setError('number');

    if (!validateDateLength(value)) {
      return setError('length');
    }
    if (!validateFormat(value)) {
      return setError('format');
    }
    setError(null);
  };

  const validateAvailabilityOfMonth = (month: string) => {
    const monthNumber = Number(month);
    const { startNumber, endNumber } = MONTH;

    return monthNumber >= startNumber && monthNumber <= endNumber;
  };

  const validateDateLength = (value: string) => value.length <= DATE_LENGTH;

  const validateMonth = (month: string) => {
    validateDateValue(month, validateAvailabilityOfMonth, setMonthError);
  };

  const validateAvailabilityOfYear = (year: string) => {
    const yearNumber = Number(year);
    const maxYear = currentDate.year + (validation.maxYearsFromNow || MAX_CARD_YEARS_FROM_NOW);

    return yearNumber >= currentDate.year && yearNumber <= maxYear;
  };

  const validateYear = (year: string) => {
    validateDateValue(year, validateAvailabilityOfYear, setYearError);
  };

  const validateAvailability = (value: ExpiryDate) => {
    const year = Number(value.year);
    const month = Number(value.month);

    const isOverYear = year > currentDate.year;
    const isOverMonth = year == currentDate.year && month >= currentDate.month;

    const isValid = isOverYear || isOverMonth;

    setAvailabilityError(!isValid);
  };

  const validateExpiryDate = (value: ExpiryDate) => {
    validateMonth(value.month);
    validateYear(value.year);
    validateAvailability(value);
  };
  /**
   * 현재 입력되는 expiryDate의 key값에 따른 오류 메세지를 반환하는 함수, month와 year에 대한 유효성 검사를 통과하면 카드 기간의 사용성 여부에 대한 검사 결과를 반환하고 아무런 오류가 없을 경우 null을 반환한다.
   * @returns 오류 메세지
   */
  const getValidationErrorMessageKey = (key: ExpiryDateKey) => {
    const targetError = key === 'month' ? monthError : yearError;

    if (targetError === 'empty') return 'empty';
    if (targetError === 'number') return 'number';
    if (targetError === 'length') return 'length';
    if (targetError === 'format') {
      return targetError === monthError ? 'monthFormat' : 'yearFormat';
    }

    return null;
  };

  const updateErrorMessages = () => {
    const monthErrorKey = getValidationErrorMessageKey('month');
    const yearErrorKey = getValidationErrorMessageKey('year');

    setValidationErrorMessage({
      month: monthErrorKey ? errorMessages[monthErrorKey] : null,
      year: yearErrorKey ? errorMessages[yearErrorKey] : null,
      availability: availabilityError ? errorMessages.availability : null,
    });
  };

  const formatValue = (value: string) => {
    if (!value) return value;

    return value.slice(0, DATE_LENGTH);
  };

  /**
   * month,year아 숫자가 아닐 경우 빈문자열을 내보내고 그렇지 않을 경우 isPadZero의 값에 따라 month,year의 형태를 변환해 반환한다.(isPadZero가 true이면 한 자리 숫자 앞에 0을 붙인다.)
   */
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
    validateExpiryDate(expiryDate);
  }, [expiryDate]);

  useEffect(() => {
    updateErrorMessages();
  }, [monthError, yearError, availabilityError]);

  return {
    validationErrorMessage,
    validationResult: {
      month: {
        isValid: monthError === null,
        error: monthError,
      },
      year: {
        isValid: yearError === null,
        error: yearError,
      },
      isValidAvailability: !availabilityError,
    },
    formattedValue: getFormattedValue(),
  };
}
