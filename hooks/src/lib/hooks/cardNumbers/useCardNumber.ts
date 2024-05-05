import { useState, useEffect } from 'react';
import { validateFilledValue, validateLength, validateNumber } from '../../utils';

export interface UseCardNumberProps {
  number: string;
  length: number;
  key: string;
}

export interface UseCardNumberValidation {
  isFilledValue: boolean;
  isNumber: boolean;
  isValidLength: boolean;
}

export interface CardNumberErrorMessages {
  empty: string;
  number: string;
  length: string;
}
export interface UseCardNumberResult {
  key: string;
  validation: UseCardNumberValidation;
}
/**
 * 하나의 카드 번호 입력 필드에 대한 유효성 검사를 진행하는 훅
 */
const useCardNumber = (props: UseCardNumberProps): UseCardNumberResult => {
  const { number, length, key } = props;
  const [validation, setValidation] = useState<UseCardNumberValidation>({
    isFilledValue: false,
    isNumber: false,
    isValidLength: false,
  });

  const validateCardNumber = () => {
    setValidation({
      isFilledValue: validateFilledValue(number),
      isNumber: validateNumber(number),
      isValidLength: validateLength(number, length),
    });
  };

  useEffect(() => {
    validateCardNumber();
  }, [number, length]);

  return {
    key,
    validation,
  };
};

export default useCardNumber;
