import { useState } from "react";
import { hasBlank, isNumber, isRightLength } from "./validate";
import ERROR_MESSAGES from "../constants/error";
import { PASSWORD } from "../constants/cardInputInformation";

type PasswordName = "password";

const usePasswordValidation = () => {
  const [passwordValidation, setPasswordValidation] = useState({
    errorMessage: {
      password: "",
    },
    isError: {
      password: false,
    },
  });

  const updateErrorState = (name: PasswordName, errorMessage: string) => {
    return setPasswordValidation((prev) => ({
      errorMessage: { ...prev.errorMessage, [name]: errorMessage },
      isError: { ...prev.isError, [name]: true },
    }));
  };

  const isPasswordValid = (value: string, name: PasswordName) => {
    if (hasBlank(value)) {
      updateErrorState(name, ERROR_MESSAGES.INVALID_TRIM_BLANK);
      return false;
    }
    if (!isNumber(value)) {
      updateErrorState(name, ERROR_MESSAGES.INVALID_ONLY_NUMBER);
      return false;
    }
    if (!isRightLength(value, PASSWORD.FIELD_LENGTH)) {
      updateErrorState(
        name,
        `${PASSWORD.FIELD_LENGTH}${ERROR_MESSAGES.INVALID_MAX_LENGTH}`
      );
      return false;
    }
    return true;
  };

  return { passwordValidation, isPasswordValid };
};
export default usePasswordValidation;
