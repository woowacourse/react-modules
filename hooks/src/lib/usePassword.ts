import { useState } from "react";

const numberRegex = /^[0-9]*$/;

export default function usePasswordNumber() {
  const [passwordNumber, setPasswordNumber] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const isValid = !errorMessage;

  const handlePasswordNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    if (numberRegex.test(value)) return;

    setPasswordNumber(value);

    if (value.length < 2) setErrorMessage("2글자를 입력해 주세요.");
  };

  return { errorMessage, isValid, passwordNumber, handlePasswordNumberChange };
}
