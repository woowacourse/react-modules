import { useEffect, useState } from "react";
import validator from "./utils/validate";
import ERROR_MESSAGE from "./constants/errorMessage";

type UserCardNumbersValidationProps = {
  cardNumbers: string[];
};

const INDIVIDUAL_CARD_LENGTH = 4;

const useCardNumbersValidation = ({ cardNumbers }: UserCardNumbersValidationProps) => {
  const [validationResult, setValidationResult] = useState({ isValid: true, errorMessage: "" });

  useEffect(() => {
    for (const cardNumber of cardNumbers) {
      let error = { isValid: true, errorMessage: "" };

      if (!validator.isValidEmptyValue(cardNumber)) {
        error = { isValid: false, errorMessage: ERROR_MESSAGE.EMPTY_VALUE };
      } else if (!validator.isValidDigit(cardNumber)) {
        error = { isValid: false, errorMessage: ERROR_MESSAGE.ONLY_NUMBER };
      } else if (!validator.isValidLength({ value: cardNumber, matchedLength: INDIVIDUAL_CARD_LENGTH })) {
        error = { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH };
      }

      if (!error.isValid) {
        setValidationResult(error);
        return;
      }
    }
  }, [cardNumbers]);

  return { validationResult };
};

export default useCardNumbersValidation;
