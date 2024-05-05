import { useState } from "react";

import { INPUT_REGEX } from "../../constants/regex";
import { MAX_LENGTH_ERROR_MESSAGE } from "../../constants/errorMessage";

function usePassword(maxLength: number) {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handlePasswordChange = (value: string) => {
    const isValidPassword = INPUT_REGEX.password(maxLength).test(value);
    setPasswordError(!isValidPassword);
    setPassword(value);
  };

  const getPasswordErrorMessage = () => {
    return passwordError ? MAX_LENGTH_ERROR_MESSAGE(maxLength) : undefined;
  };

  return {
    password,
    passwordError,
    getPasswordErrorMessage,
    handlePasswordChange,
  };
}

export default usePassword;
