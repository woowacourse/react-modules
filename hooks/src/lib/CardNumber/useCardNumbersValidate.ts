import { useState } from 'react';

import validateNumber from '../utils/validateNumber';
import validateMaxLength from '../utils/validateMaxLength';
import { cardTypeRules } from './cardTypeRules';

export type CardNumberValidateResult = {
  isValid: boolean;
  errorMessage: string | null;
  validateCardNumbers: (
    cardNumber: string,
    cardType: keyof typeof cardTypeRules | null
  ) => void;
};

const useCardNumbersValidate = (): CardNumberValidateResult => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardNumbers = (
    cardNumber: string,
    cardType: keyof typeof cardTypeRules | null
  ) => {
    if (!validateNumber(cardNumber)) {
      setIsValid(false);

      setErrorMessage('숫자만 입력해주세요.');
      return;
    }

    if (cardType) {
      if (!validateMaxLength(cardNumber, cardTypeRules[cardType].length)) {
        setIsValid(false);

        setErrorMessage(
          `${cardTypeRules[cardType].length}자리만 입력해주세요.`
        );
        return;
      }
    } else {
      if (!validateMaxLength(cardNumber, 16)) {
        setIsValid(false);

        setErrorMessage('16자리만 입력해주세요.');
        return;
      }
    }

    setIsValid(true);

    setErrorMessage(null);
  };

  return { isValid, errorMessage, validateCardNumbers };
};

export default useCardNumbersValidate;
