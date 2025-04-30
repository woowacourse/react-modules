import { ChangeEvent, useState } from 'react';
import { CardNumbersKey } from './constants';

function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState<
    Record<CardNumbersKey, string>
  >({
    part1: '',
    part2: '',
    part3: '',
    part4: '',
  });

  const [isValid, setIsValid] = useState<Record<CardNumbersKey, boolean>>({
    part1: true,
    part2: true,
    part3: true,
    part4: true,
  });

  const [errorMessage, setErrorMessage] = useState<string>('');

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
      setIsValid((prev) => ({ ...prev, [name]: false }));
      setErrorMessage('숫자만 입력해주세요.');
      return;
    }

    if (!isValidLength) {
      setIsValid((prev) => ({ ...prev, [name]: false }));
      setErrorMessage('카드 번호는 네 자리만 입력해야 합니다.');
      return;
    }

    setIsValid((prev) => ({ ...prev, [name]: true }));
    setErrorMessage('');
  };

  const handleCardNumbersChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCardNumbers((prev) => ({ ...prev, [name]: value }));
  };

  return {
    cardNumbers,
    isValid,
    errorMessage,
    validateCardNumbers,
    handleCardNumbersChange,
  };
}

export default useCardNumbers;
