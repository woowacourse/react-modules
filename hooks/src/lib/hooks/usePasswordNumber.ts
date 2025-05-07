import { Dispatch, useState } from "react";
import validatePasswordNumber from "../util/validatePasswordNumber";

interface UsePasswordNumberReturn {
  passwordNumber: string;
  setPasswordNumber: Dispatch<string>;
  errorMessage?: string;
  isError: boolean;
}

export default function usePasswordNumber(): UsePasswordNumberReturn {
  const [passwordNumber, setPasswordNumber] = useState("");
  const errorMessage = validatePasswordNumber(passwordNumber);

  return {
    passwordNumber,
    setPasswordNumber,
    errorMessage,
    isError: !!errorMessage,
  };
}
