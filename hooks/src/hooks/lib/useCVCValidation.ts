import { useEffect, useState } from "react";
import validator from "./utils/validate";
import ERROR_MESSAGE from "./constants/errorMessage";

type Props = {
  cvc: string;
};

const MAX_CVC_LENGTH = 3;

const useCVCValidation = ({ cvc }: Props) => {
  const [validationResult, setValidationResult] = useState({
    isValid: true,
    errorMessage: "",
  });

  useEffect(() => {
    if (!validator.isValidEmptyValue(cvc)) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.EMPTY_VALUE,
      });
      return;
    }

    if (!validator.isValidDigit(cvc)) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.ONLY_NUMBER,
      });
      return;
    }

    if (
      !validator.isValidLength({ value: cvc, matchedLength: MAX_CVC_LENGTH })
    ) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.INVALID_CVC_LENGTH,
      });
      return;
    }

    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  }, [cvc]);

  return { validationResult };
};

export default useCVCValidation;
