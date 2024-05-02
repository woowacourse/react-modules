import { useRef } from "react";
import validator from "./utils/validate";
import ERROR_MESSAGE from "./constants/errorMessage";

type UserCardNumbersValidationProps = {
  cardNumbers: string[];
};

const INDIVIDUAL_CARD_LENGTH = 4;

const useCardNumbersValidation = ({ cardNumbers }: UserCardNumbersValidationProps) => {
  const ref = useRef({ isValid: false, errorMessage: "" });

  for (const cardNumber of cardNumbers) {
    if (!validator.isValidEmptyValue(cardNumber)) {
      ref.current = {
        isValid: false,
        errorMessage: ERROR_MESSAGE.EMPTY_VALUE,
      };
      break;
    }

    if (!validator.isValidDigit(cardNumber)) {
      ref.current = {
        isValid: false,
        errorMessage: ERROR_MESSAGE.ONLY_NUMBER,
      };
      break;
    }

    if (!validator.isValidLength({ value: cardNumber, matchedLength: INDIVIDUAL_CARD_LENGTH })) {
      ref.current = {
        isValid: false,
        errorMessage: ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH,
      };
      break;
    }

    ref.current = {
      isValid: true,
      errorMessage: "",
    };
  }

  return { validationResult: ref.current };
};

export default useCardNumbersValidation;
