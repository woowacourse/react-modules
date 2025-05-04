import { useState } from "react";
import cardPasswordValidation from "./cardPasswordValidation";

function useCardPassword() {
  const [password, setPassword] = useState("");

  function handlePassword(value: string) {
    setPassword(value);
  }

  const { isPasswordError, errorText } = cardPasswordValidation(password);

  return { password, handlePassword, isPasswordError, errorText };
}

export default useCardPassword;
