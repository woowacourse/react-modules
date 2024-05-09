import { useEffect, useState } from 'react';

import { BRAND_LENGTH } from '../constants';
import { ErrorMessage, UseCardModuleReturn } from '../types';

import useCardBrand from './useCardBrand';

export type CardNumbersType = string[] | null;
/**
 * useCardNumbers props인 errorMessage 타입
 */
export interface UseCardNumbersErrorMessage {
  empty: string;
  number: string;
  length: string;
}
export interface UseCardNumbersProps {
  fieldCount: number;
  cardNumberCounts: number[];
  cardNumbers: CardNumbersType;
  errorMessages: UseCardNumbersErrorMessage;
  isNeedValidValue: boolean;
}

export type CardNumberError = 'empty' | 'number' | 'length' | null;

export type CardNumberValidationResultErrorMessage = (string | null)[];

export interface CardNumbersValidationResult {
  error: CardNumberError;
  isValid: boolean;
}

export type UseCardNumbersReturn = UseCardModuleReturn<ErrorMessage, CardNumbersValidationResult, CardNumbersType>;

// TODO :
/*
brand - 숫자 아닐 경우, 빈 값일 경우 오류 메세지 변경
numbers - 브랜드가 없을 경우 오류 메세지, 자르지 않을 것 인지 여부
        - 유효성 결과 반환 (브랜드가 있을 때 오류 없음, )
*/
export default function useCardNumbers({ numbers }: { numbers: string }) {
  const [cardNumbers, setCardNumbers] = useState<CardNumbersType>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const { brand } = useCardBrand({ cardNumbers: numbers });

  const splitNumber = () => {
    if (!brand) return setCardNumbers(null);

    const numString = numbers.toString();
    const length = BRAND_LENGTH[brand];

    if (length === 16) {
      return setCardNumbers([
        numString.slice(0, 4),
        numString.slice(4, 8),
        numString.slice(8, 12),
        numString.slice(12, 16),
      ]);
    }

    if (length === 15) {
      return setCardNumbers([numString.slice(0, 4), numString.slice(4, 10), numString.slice(10, 15)]);
    }
  };

  useEffect(() => {
    splitNumber();
  }, [numbers, brand]);

  return { cardNumbers };
}
