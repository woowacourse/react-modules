import { useEffect, useState } from 'react';

import { BRAND_LENGTH, MAX_CARD_NUMBERS_LENGTH, MIN_CARD_NUMBERS_LENGTH } from '../constants';
import { ErrorMessage, UseCardModuleReturn } from '../types';
import { Brand } from '../types/card';
import { validateFilledValue, validateNumber } from '../utils';

import useCardBrand from './useCardBrand';

export type CardNumbersType = string[] | null;
/**
 * useCardNumbers props인 errorMessage 타입
 */
export interface UseCardNumbersErrorMessage {
  empty: string;
  number: string;
  length: string;
  brand: string;
}
export interface UseCardNumbersProps {
  numbers: string;
  errorMessages: UseCardNumbersErrorMessage;
  isNeedValidValue: boolean;
  maxLength?: number;
}

export type CardNumberError = 'empty' | 'number' | 'length' | 'brand' | null;

export type CardNumberValidationResultErrorMessage = (string | null)[];

export interface CardNumbersValidationResult {
  error: CardNumberError;
  isValid: boolean;
}

export interface UseCardNumbersReturn
  extends UseCardModuleReturn<ErrorMessage, CardNumbersValidationResult, CardNumbersType> {
  brand: Brand;
}

export default function useCardNumbers(props: UseCardNumbersProps): UseCardNumbersReturn {
  const { numbers, errorMessages, isNeedValidValue, maxLength = MAX_CARD_NUMBERS_LENGTH } = props;
  const [error, setError] = useState<CardNumberError>(null);

  const { brand } = useCardBrand({ cardNumbers: numbers });

  /**
   * 카드 번호 최소 자리 수
   */
  const validateMinLength = () => {
    return numbers.length >= MIN_CARD_NUMBERS_LENGTH;
  };

  const validateNumbers = () => {
    //빈값
    if (!validateFilledValue(numbers)) return setError('empty');
    //숫자
    if (!validateNumber(numbers)) return setError('number');
    // 최소 숫자 길이
    if (!validateMinLength()) return setError('length');

    if (!brand) return setError('brand');

    return setError(null);
  };

  const splitNumbersByFour = (numString: string) => [
    numString.slice(0, 4),
    numString.slice(4, 8),
    numString.slice(8, 12),
    numString.slice(12, 16),
  ];

  const splitNumbers = () => {
    const numString = numbers.slice(0, maxLength).toString();
    if (!brand) return splitNumbersByFour(numString);

    const length = BRAND_LENGTH[brand];

    if (length === 14) {
      return [numString.slice(0, 4), numString.slice(4, 10), numString.slice(10, 14)];
    }

    if (length === 15) {
      return [numString.slice(0, 4), numString.slice(4, 10), numString.slice(10, 15)];
    }

    return splitNumbersByFour(numString);
  };

  const getFormattedValue = () => {
    const separatedNumbers = splitNumbers();

    if (!isNeedValidValue || !error || error === 'length') {
      return separatedNumbers;
    }

    return null;
  };

  useEffect(() => {
    validateNumbers();
  }, [numbers, brand]);

  useEffect(() => {
    getFormattedValue();
  }, [error]);

  return {
    validationErrorMessage: error ? errorMessages[error] : null,
    validationResult: {
      error,
      isValid: !error,
    },
    formattedValue: getFormattedValue(),
    brand: brand,
  };
}
