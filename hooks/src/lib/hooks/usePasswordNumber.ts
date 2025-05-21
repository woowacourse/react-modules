import { Dispatch, useState } from "react";
import validatePasswordNumber from "../util/validatePasswordNumber/validatePasswordNumber";
import { limitInputNumber } from "../util/limitInputNumber/limitInputNumber";
import { PASSWORD_LENGTH } from "../constants";

interface UsePasswordNumberReturn {
  passwordNumber: string;
  setPasswordNumber: Dispatch<string>;
  errorMessage?: string;
  isError: boolean;
}

export default function usePasswordNumber(): UsePasswordNumberReturn {
  const [passwordNumber, setPasswordNumber] = useState("");
  const errorMessage = validatePasswordNumber(passwordNumber);

  const setValidPasswordNumber = (passwordNumber: string) =>
    limitInputNumber({
      inputNumbers: passwordNumber,
      setInputNumber: setPasswordNumber,
      groupLengths: [PASSWORD_LENGTH],
    });

  return {
    passwordNumber,
    setPasswordNumber: setValidPasswordNumber,
    errorMessage,
    isError: !!errorMessage,
  };
}
