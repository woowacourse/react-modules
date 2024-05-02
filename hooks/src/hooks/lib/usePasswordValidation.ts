import { useRef } from "react";
import validator from "./utils/validate";
import ERROR_MESSAGE from "./constants/errorMessage";

type Props = {
  password: string;
};

const MAX_PASSWORD_LENGTH = 2;

const usePasswordValidation = ({ password }: Props) => {
  const ref = useRef({ isValid: false, errorMessage: "" });

  if (!validator.isValidEmptyValue(password)) {
    ref.current = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.EMPTY_VALUE,
    };
    return { validationResult: ref.current };
  }

  if (!validator.isValidDigit(password)) {
    ref.current = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.ONLY_NUMBER,
    };
    return { validationResult: ref.current };
  }

  if (!validator.isValidLength({ value: password, matchedLength: MAX_PASSWORD_LENGTH })) {
    ref.current = {
      isValid: false,
      errorMessage: ERROR_MESSAGE.INVALID_PASSWORD_LENGTH,
    };
    return { validationResult: ref.current };
  }

  ref.current = {
    isValid: true,
    errorMessage: "",
  };

  return { validationResult: ref.current };
};

export default usePasswordValidation;
