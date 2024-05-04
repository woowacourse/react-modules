import { useEffect, useState } from "react";
import validator from "./utils/validate";
import ERROR_MESSAGE from "./constants/errorMessage";

type Props = {
  cvc: string;
};

const MAX_CVC_LENGTH = 3;

const useCVCValidation = ({ cvc }: Props) => {
  const [validationResult, setValidationResult] = useState({ isValid: true, errorMessage: "" });

  useEffect(() => {
    let error = { isValid: true, errorMessage: "" };

    if (!validator.isValidEmptyValue(cvc)) {
      error = { isValid: false, errorMessage: ERROR_MESSAGE.EMPTY_VALUE };
    } else if (!validator.isValidDigit(cvc)) {
      error = { isValid: false, errorMessage: ERROR_MESSAGE.ONLY_NUMBER };
    } else if (!validator.isValidLength({ value: cvc, matchedLength: MAX_CVC_LENGTH })) {
      error = { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_CVC_LENGTH };
    }

    setValidationResult(error);
  }, [cvc]);

  return { validationResult };
};

export default useCVCValidation;
