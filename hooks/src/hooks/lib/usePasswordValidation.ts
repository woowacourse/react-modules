import { useEffect, useState } from "react";
import validator from "./utils/validate";
import ERROR_MESSAGE from "./constants/errorMessage";

type Props = {
  password: string;
};

const MAX_PASSWORD_LENGTH = 2;

const usePasswordValidation = ({ password }: Props) => {
  const [validationResult, setValidationResult] = useState({ isValid: true, errorMessage: "" });

  useEffect(() => {
    let error = { isValid: true, errorMessage: "" };

    if (!validator.isValidEmptyValue(password)) {
      error = { isValid: false, errorMessage: ERROR_MESSAGE.EMPTY_VALUE };
    } else if (!validator.isValidDigit(password)) {
      error = { isValid: false, errorMessage: ERROR_MESSAGE.ONLY_NUMBER };
    } else if (!validator.isValidLength({ value: password, matchedLength: MAX_PASSWORD_LENGTH })) {
      error = { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_PASSWORD_LENGTH };
    }

    setValidationResult(error);
  }, [password]);

  return { validationResult };
};

export default usePasswordValidation;
