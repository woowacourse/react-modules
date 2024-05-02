import { useState } from "react";

import { INPUT_REGEX } from "../constants/regex";
import { ERROR_MESSAGES } from "../constants/errorMessage";

function usePassword(maxLength: number) {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handlePasswordChange = (value: string) => {
    const isValidPassword = INPUT_REGEX.password(maxLength).test(value);
    setPasswordError(!isValidPassword);
    setPassword(value);
  };

  const getPasswordErrorMessage = () => {
    return passwordError
      ? ERROR_MESSAGES.maxLengthNumber(maxLength)
      : undefined;
  };

  return {
    password,
    passwordError,
    getPasswordErrorMessage,
    handlePasswordChange,
  };
}

export default usePassword;
