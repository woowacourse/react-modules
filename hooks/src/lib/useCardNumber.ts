import { useState } from "react";
import { DEFAULT_ERROR_MESSAGE } from "./constants/messages";
import { DEFAULT_SYSTEM_CONSTANTS } from "./constants/systemConstants";

interface ErrorMessageProps {
  customErrorMessages?: {
    minLength?: string;
    maxLength?: string;
    format?: string;
  };
}

const useCardNumber = ({
  customErrorMessages = {},
}: ErrorMessageProps = {}) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCardNumberValidation = (numbers: string) => {
    numbers = numbers.replaceAll("-", "");
    const result = validateCardNumber(numbers);
    setIsValid(result.isValid);
    setErrorMessage(result.errorMessage);
  };

  const validateCardNumber = (
    numbers: string
  ): { isValid: boolean; errorMessage: string } => {
    if (Number.isNaN(Number(numbers))) {
      return {
        isValid: false,
        errorMessage:
          customErrorMessages.format ??
          DEFAULT_ERROR_MESSAGE.INVALID_CARD_NUMBER_FORMAT,
      };
    }
    if (numbers.length < DEFAULT_SYSTEM_CONSTANTS.CARD_NUMBER_MIN_LENGTH) {
      return {
        isValid: false,
        errorMessage:
          customErrorMessages.minLength ??
          DEFAULT_ERROR_MESSAGE.INVALID_CARD_NUMBER_MIN_LENGTH,
      };
    }
    if (numbers.length > DEFAULT_SYSTEM_CONSTANTS.CARD_NUMBER_MAX_LENGTH) {
      return {
        isValid: false,
        errorMessage:
          customErrorMessages.maxLength ??
          DEFAULT_ERROR_MESSAGE.INVALID_CARD_NUMBER_MAX_LENGTH,
      };
    }
    return {
      isValid: true,
      errorMessage: "",
    };
  };

  return { handleCardNumberValidation, isValid, errorMessage };
};

export default useCardNumber;
