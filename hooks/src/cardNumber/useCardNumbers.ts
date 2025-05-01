import { ChangeEvent, useState } from 'react';
import { CardNumbersKey } from './constants';
import { ValidationResult } from '../types';

const ERROR_MESSAGE = {
  notNumber: '숫자만 입력해주세요.',
  invalidLength: '카드 번호는 네 자리만 입력해야 합니다.',
};

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
    return value.length <= 4;
  };

  const validateCardNumbers = (value: string) => {
    const isNumber = checkIsNumber(value);
    const isValidLength = checkIsValidLength(value);

    if (!isNumber) {
      return 'notNumber';
    }

    if (!isValidLength) {
      return 'invalidLength';
    }

    return null;
  };

  const handleCardNumbersChange = (
    event: ChangeEvent<HTMLInputElement>,
    restrictChange: boolean = true
  ) => {
    const { name, value } = event.target;
    const errorType = validateCardNumbers(value);

    if (restrictChange && errorType) {
      return;
    }

    if (!restrictChange) {
      setValidationResults((prev) => ({
        ...prev,
        [name]: {
          isValid: !Boolean(errorType),
          errorMessage: errorType ? ERROR_MESSAGE[errorType] : '',
        },
      }));
    }

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
