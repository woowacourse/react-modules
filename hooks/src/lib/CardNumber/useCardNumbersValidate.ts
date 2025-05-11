import { useState } from 'react';

import validateNumber from '../utils/validateNumber';
import validateMaxLength from '../utils/validateMaxLength';
import { cardTypeRules } from './cardTypeRules';

export type CardNumberValidateResult = {
  isValid: boolean;
  errorMessage: string | null;
  validateCardNumbers: (cardNumber: string) => void;
  validateCardNumberBlur: (
    cardNumber: string,
    cardType: keyof typeof cardTypeRules | null
  ) => void;
};

const useCardNumbersValidate = (): CardNumberValidateResult => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardNumbers = (cardNumber: string) => {
    if (!validateNumber(cardNumber)) {
      setIsValid(false);
      setErrorMessage('숫자만 입력해주세요.');
      return;
    }

    setIsValid(true);
    setErrorMessage(null);
  };

  const validateCardNumberBlur = (
    cardNumber: string,
    cardType: keyof typeof cardTypeRules | null
  ) => {
    if (cardType) {
      if (cardNumber.length < cardTypeRules[cardType].length) {
        setIsValid(false);

        setErrorMessage(
          `${cardTypeRules[cardType].length}자리의 숫자를 입력해주세요.`
        );
        return;
      }
    }

    if (cardNumber.length < 16) {
      setIsValid(false);

      setErrorMessage('16자리의 숫자를 입력해주세요.');
      return;
    }
  };

  return { isValid, errorMessage, validateCardNumbers, validateCardNumberBlur };
};

export default useCardNumbersValidate;
