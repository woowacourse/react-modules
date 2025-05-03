import { useState } from "react";

const numberRegex = /^[0-9]*$/;

export default function useCvcNumber() {
  const [cvcNumber, setCvcNumber] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const isValid = !errorMessage;

  const handleCvcNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    if (!numberRegex.test(value)) return;

    setCvcNumber(value);

    if (value.length < 3) {
      setErrorMessage("3글자를 입력해 주세요.");
      return;
    }

    setErrorMessage("");
  };

  return { errorMessage, isValid, cvcNumber, handleCvcNumberChange };
}
