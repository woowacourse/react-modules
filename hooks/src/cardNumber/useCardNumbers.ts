import { ChangeEvent, useState } from 'react';
import { CardNumbersKey } from './constants';
import { ValidationResult } from '../types';

function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState<
    Record<CardNumbersKey, string>
  >({
    part1: '',
    part2: '',
    part3: '',
    part4: '',
  });

  const [validationResults, setValidationResults] = useState<
    Record<CardNumbersKey, ValidationResult>
  >({
    part1: { isValid: true, errorMessage: '' },
    part2: { isValid: true, errorMessage: '' },
    part3: { isValid: true, errorMessage: '' },
    part4: { isValid: true, errorMessage: '' },
  });

  const checkIsNumber = (value: string) => {
    const regex = /^[0-9]*$/;
    return regex.test(value);
  };

  const checkIsValidLength = (value: string) => {
    return value.length === 4;
  };

  const validateCardNumbers = (name: string, value: string) => {
    const isNumber = checkIsNumber(value);
    const isValidLength = checkIsValidLength(value);

    if (!isNumber) {
      setValidationResults((prev) => ({
        ...prev,
        [name]: { isValid: false, errorMessage: '숫자만 입력해주세요.' },
      }));
      return;
    }

    if (!isValidLength) {
      setValidationResults((prev) => ({
        ...prev,
        [name]: {
          isValid: false,
          errorMessage: '카드 번호는 네 자리만 입력해야 합니다.',
        },
      }));
      return;
    }
    setValidationResults((prev) => ({
      ...prev,
      [name]: {
        isValid: true,
        errorMessage: '',
      },
    }));
  };

  const handleCardNumbersChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCardNumbers((prev) => ({ ...prev, [name]: value }));
  };

  return {
    cardNumbers,
    validationResults,
    validateCardNumbers,
    handleCardNumbersChange,
  };
}

export default useCardNumbers;
