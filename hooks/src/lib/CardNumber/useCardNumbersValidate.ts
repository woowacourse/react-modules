import { useState } from 'react';

import validateNumber from '../utils/validateNumber';
import { cardRules } from './cardTypeRules';
import { ERROR_MESSAGE } from '../constants/errorMessage';

const INITIAL_CARD_NUMBER_LENGTH = 16;

type validateCardNumberBlurProps = {
  cardNumbers: string;
  cardType: (typeof cardRules)[number]['name'] | null;
};

export type CardNumberValidateResult = {
  isValid: boolean;
  errorMessage: string | null;
  validateCardNumbers: (cardNumber: string) => void;
  validateCardNumberBlur: (props: validateCardNumberBlurProps) => void;
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

  const validateCardNumberBlur = ({
    cardNumbers,
    cardType,
  }: validateCardNumberBlurProps) => {
    if (cardType) {
      const rule = cardRules.find((rule) => rule.name === cardType);

      if (cardNumbers.length < rule.length) {
        setIsValid(false);

        setErrorMessage(`${rule.length}자리의 숫자를 입력해주세요.`);
        return;
      }
    }

    if (cardNumbers.length < INITIAL_CARD_NUMBER_LENGTH) {
      setIsValid(false);

      setErrorMessage(ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH);
      return;
    }
  };

  return { isValid, errorMessage, validateCardNumbers, validateCardNumberBlur };
};

export default useCardNumbersValidate;
