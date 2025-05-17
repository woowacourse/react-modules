import { useState } from "react";
import { DEFAULT_ERROR_MESSAGE } from "./constants/messages";

interface ErrorMessageProps {
  customErrorMessages?: {
    format?: string;
    length?: string;
  };
}

const useCardCVC = ({ customErrorMessages = {} }: ErrorMessageProps = {}) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCVCValidate = (input: string) => {
    const result = validateCVC(input);
    setIsValid(result.isValid);
    setErrorMessage(result.errorMessage);
  };

  const validateCVC = (input: string) => {
    if (Number.isNaN(Number(input))) {
      return {
        isValid: false,
        errorMessage:
          customErrorMessages.format ??
          DEFAULT_ERROR_MESSAGE.INVALID_CVC_FORMAT,
      };
    }
    if (input.length !== 3) {
      return {
        isValid: false,
        errorMessage:
          customErrorMessages.length ??
          DEFAULT_ERROR_MESSAGE.INVALID_CVC_LENGTH,
      };
    }

    return { isValid: true, errorMessage: "" };
  };

  return { handleCVCValidate, isValid, errorMessage };
};

export default useCardCVC;
