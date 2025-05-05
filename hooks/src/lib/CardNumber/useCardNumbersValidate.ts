import { useState } from "react";

import validateNumber from "../utils/validateNumber";
import validateMaxLength from "../utils/validateMaxLength";

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
  fourth: true,
};

type CardNumberValidateResult = {
  validationState: CardNumbersValidate;
  errorMessage: string | null;
  validateCardNumbers: (cardNumber: string, key: string) => void;
};

const useCardNumbersValidate = (): CardNumberValidateResult => {
  const [validationState, setValidationState] = useState<CardNumbersValidate>(
    initialCardNumberValidate
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateCardNumbers = (cardNumber: string, key: string) => {
    if (!validateNumber(cardNumber)) {
      setValidationState({
        ...validationState,
        [key]: false,
      });

      setErrorMessage("숫자만 입력해주세요.");
      return;
    }

    if (!validateMaxLength(cardNumber, 4)) {
      setValidationState({
        ...validationState,
        [key]: false,
      });

      setErrorMessage("4자리만 입력해주세요.");
      return;
    }

    setValidationState({
      ...validationState,
      [key]: true,
    });

    setErrorMessage(null);
  };

  return { validationState, errorMessage, validateCardNumbers };
};

export default useCardNumbersValidate;
