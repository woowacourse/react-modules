import { ValidationType } from "./../../types/validation";
import { useState } from "react";
import { ERROR_MESSAGE, defaultValidationValue } from "../constants/validation";
import { isEmpty, isLengthEqual, isPositiveInteger } from "../utils/validation";

interface UsePasswordReturn {
  password: string;
  passwordValidation: ValidationType;
  handlePasswordChange: (value: string) => void;
}

const MAX_LENGTH = 2;

const validatePassword = (value: string): ValidationType => {
  if (isEmpty(value)) return defaultValidationValue;

  if (!isPositiveInteger(value)) {
    return {
      isError: true,
      errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
    };
  }

  if (!isLengthEqual(value, MAX_LENGTH)) {
    return {
      isError: true,
      errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
    };
  }

  return defaultValidationValue;
};

const usePassword = (): UsePasswordReturn => {
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState<ValidationType>(
    defaultValidationValue
  );

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    const validationResult = validatePassword(value);
    setPasswordValidation(validationResult);
  };

  return { password, passwordValidation, handlePasswordChange };
};

export default usePassword;
