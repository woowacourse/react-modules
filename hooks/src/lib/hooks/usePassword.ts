import { useState } from "react";

import { INPUT_REGEX } from "../constants/regex";

function usePassword(maxLength: number) {
  const [password, setPassword] = useState("");
  const [passwordErrorState, setPasswordErrorState] = useState({
    isError: false,
    errorMessage: "",
  });

  const updateErrorState = (isValid: boolean) => {
    if (isValid) {
      setPasswordErrorState({
        isError: false,
        errorMessage: "",
      });
    } else {
      setPasswordErrorState({
        isError: true,
        errorMessage: `${maxLength}자리 숫자로 입력해 주세요.`,
      });
    }
  };

  const handlePasswordChange = (value: string) => {
    const isValidPassword = INPUT_REGEX.password(maxLength).test(value);

    updateErrorState(isValidPassword);
    setPassword(value);
  };

  return {
    password,
    passwordErrorState,
    handlePasswordChange,
  };
}

export default usePassword;
