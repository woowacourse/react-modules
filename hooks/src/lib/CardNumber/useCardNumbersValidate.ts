import { useState } from "react";

import validateNumber from "../utils/validateNumber";
import validateMaxLength from "../utils/validateMaxLength";
import { validationMessages } from "../../constants/validationMessages";
import { checkBasicValidation } from "../utils/checkBasicValidation";

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
    const result = checkBasicValidation({
      value: cardNumber,
      maxLength: 4,
    });

    setValidationState((prev) => ({
      ...prev,
      [key]: result.isValid,
    }));
    setErrorMessage(result.errorMessage);
  };

  return { validationState, errorMessage, validateCardNumbers };
};

export default useCardNumbersValidate;
