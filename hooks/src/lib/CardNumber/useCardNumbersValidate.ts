import { useState } from 'react';

import validateNumber from '../utils/validateNumber';
import { cardTypeRules } from './cardTypeRules';
import { ERROR_MESSAGE } from '../constants/errorMessage';

const INITIAL_CARD_NUMBER_LENGTH = 16;

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
      setErrorMessage(ERROR_MESSAGE.INVALID_NUMBER);
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

    if (cardNumber.length < INITIAL_CARD_NUMBER_LENGTH) {
      setIsValid(false);

      setErrorMessage(ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH);
      return;
    }
  };

  return { isValid, errorMessage, validateCardNumbers, validateCardNumberBlur };
};

export default useCardNumbersValidate;
