import { useState } from "react";

const numberRegex = /^[0-9]*$/;

interface CustomErrorMessagesType {
  length?: string;
}

export default function useCvcNumber(
  customErrorMessage?: CustomErrorMessagesType
) {
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
      setErrorMessage(
        customErrorMessage?.length ?? "3자리 숫자를 입력해 주세요."
      );
      return;
    }

    setErrorMessage("");
  };

  return { errorMessage, isValid, cvcNumber, handleCvcNumberChange };
}
