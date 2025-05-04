import { useState } from "react";

const numberRegex = /^[0-9]*$/;

export default function usePassword() {
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const isValid = !errorMessage;

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!numberRegex.test(value)) return;

    setPassword(value);

    if (value.length < 2) {
      setErrorMessage("2자리 숫자를 입력해 주세요.");
      return;
    }

    setErrorMessage("");
  };

  return { errorMessage, isValid, password, handlePasswordChange };
}
