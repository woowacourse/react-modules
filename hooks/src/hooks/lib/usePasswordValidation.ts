import { useEffect, useState } from "react";
import validator from "./utils/validate";
import ERROR_MESSAGE from "./constants/errorMessage";

type Props = {
  password: string;
};

const MAX_PASSWORD_LENGTH = 2;

const usePasswordValidation = ({ password }: Props) => {
  const [validationResult, setValidationResult] = useState({
    isValid: true,
    errorMessage: "",
  });

  useEffect(() => {
    if (!validator.isValidEmptyValue(password)) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.EMPTY_VALUE,
      });
      return;
    }

    if (!validator.isValidDigit(password)) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.ONLY_NUMBER,
      });
      return;
    }

    if (
      !validator.isValidLength({
        value: password,
        matchedLength: MAX_PASSWORD_LENGTH,
      })
    ) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.INVALID_PASSWORD_LENGTH,
      });
      return;
    }

    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  }, [password]);

  return { validationResult };
};

export default usePasswordValidation;
