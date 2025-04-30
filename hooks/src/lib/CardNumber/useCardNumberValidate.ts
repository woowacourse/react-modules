import { useState } from 'react';

import validateNumber from '../utils/validateNumber';
import validateMaxLength from '../utils/validateMaxLength';

type CardNumbersValidate = {
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
};

const initialCardNumberValidate: CardNumbersValidate = {
  first: true,
  second: true,
  third: true,
  fourth: true
};

type CardNumberValidateResult = {
  isValid: CardNumbersValidate;
  errorMessage: string | null;
  validateCardNumber: (cardNumber: string, key: string) => void;
};

const useCardNumbersValidate = (): CardNumberValidateResult => {
  const [isValid, setIsValid] = useState<CardNumbersValidate>(
    initialCardNumberValidate
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardNumber = (cardNumber: string, key: string) => {
    if (!validateNumber(cardNumber)) {
      setIsValid({
        ...isValid,
        [key]: false
      });

      setErrorMessage('숫자만 입력해주세요.');
      return;
    }

    if (!validateMaxLength(cardNumber, 4)) {
      setIsValid({
        ...isValid,
        [key]: false
      });

      setErrorMessage('4자리만 입력해주세요.');
      return;
    }

    setIsValid({
      ...isValid,
      [key]: true
    });

    setErrorMessage(null);
  };

  return { isValid, errorMessage, validateCardNumber };
};

export default useCardNumbersValidate;
