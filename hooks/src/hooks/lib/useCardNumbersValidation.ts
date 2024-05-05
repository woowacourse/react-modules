import { useState, useEffect } from "react";
import validator from "./utils/validate";
import ERROR_MESSAGE from "./constants/errorMessage";

type UserCardNumbersValidationProps = {
  cardNumbers: string[];
};

const INDIVIDUAL_CARD_LENGTH = 4;

const useCardNumbersValidation = ({
  cardNumbers,
}: UserCardNumbersValidationProps) => {
  const [validationResult, setValidationResult] = useState({
    isValid: true,
    errorMessage: "",
  });

  useEffect(() => {
    let isValid = true;
    let errorMessage = "";

    for (const cardNumber of cardNumbers) {
      if (!validator.isValidEmptyValue(cardNumber)) {
        isValid = false;
        errorMessage = ERROR_MESSAGE.EMPTY_VALUE;
        break;
      }

      if (!validator.isValidDigit(cardNumber)) {
        isValid = false;
        errorMessage = ERROR_MESSAGE.ONLY_NUMBER;
        break;
      }

      if (
        !validator.isValidLength({
          value: cardNumber,
          matchedLength: INDIVIDUAL_CARD_LENGTH,
        })
      ) {
        isValid = false;
        errorMessage = ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH;
        break;
      }
    }

    setValidationResult({ isValid, errorMessage });
  }, [cardNumbers]);

  return { validationResult };
};

export default useCardNumbersValidation;
