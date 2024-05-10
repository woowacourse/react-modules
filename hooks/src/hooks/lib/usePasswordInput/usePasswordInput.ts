import { useState } from "react";
import validator from "../utils/validate";
import ERROR_MESSAGE from "../constants/errorMessage";

interface PasswordState {
  value: string;
  isValid: boolean;
  errorMessage: string;
}

interface Props {
  PasswordState: PasswordState;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MAX_PASSWORD_LENGTH = 2;

const usePasswordInput = (): Props => {
  const [passwordState, setPasswordState] = useState<PasswordState>({
    value: "",
    isValid: false,
    errorMessage: "",
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let isValid = true;
    let errorMessage = "";

    if (!validator.isValidEmptyValue(value)) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.EMPTY_VALUE;
    } else if (!validator.isValidDigit(value)) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.ONLY_NUMBER;
    } else if (!validator.isValidLength({ value: value, matchedLength: MAX_PASSWORD_LENGTH })) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.INVALID_PASSWORD_LENGTH;
    }

    setPasswordState({
      value: value,
      isValid,
      errorMessage,
    });
  };

  return { PasswordState: passwordState, handlePasswordChange };
};

export default usePasswordInput;
