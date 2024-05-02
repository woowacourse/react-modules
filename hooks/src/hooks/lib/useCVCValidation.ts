import { useRef } from "react";
import validator from "./utils/validate";
import ERROR_MESSAGE from "./constants/errorMessage";

type Props = {
  cvc: string;
};

const MAX_CVC_LENGTH = 3;

const useCVCValidation = ({ cvc }: Props) => {
  const ref = useRef({ isValid: false, errorMessage: "" });

  if (!validator.isValidEmptyValue(cvc)) {
    ref.current = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.EMPTY_VALUE,
    };
    return { validationResult: ref.current };
  }

  if (!validator.isValidDigit(cvc)) {
    ref.current = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.ONLY_NUMBER,
    };
    return { validationResult: ref.current };
  }

  if (!validator.isValidLength({ value: cvc, matchedLength: MAX_CVC_LENGTH })) {
    ref.current = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.INVALID_CVC_LENGTH,
    };
    return { validationResult: ref.current };
  }

  ref.current = {
    isValid: true,
    errorMessage: "",
  };

  return { validationResult: ref.current };
};

export default useCVCValidation;
