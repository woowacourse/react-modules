import { useState, useEffect } from "react";
import validator from "./utils/validate";
import ERROR_MESSAGE from "./constants/errorMessage";

type Props = {
  cardNumbers: string;
};

const useCardNumbersValidation = ({ cardNumbers }: Props) => {
  const [validationResult, setValidationResult] = useState({
    isValid: true,
    errorMessage: "",
  });

  useEffect(() => {
    if (!validator.isValidEmptyValue(cardNumbers)) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.EMPTY_VALUE,
      });

      return;
    }

    if (!validator.isValidDigit(cardNumbers)) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.ONLY_NUMBER,
      });

      return;
    }

    setValidationResult({ isValid: true, errorMessage: "" });
  }, [cardNumbers]);

  return { validationResult };
};

export default useCardNumbersValidation;
