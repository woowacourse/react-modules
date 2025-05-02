import { Dispatch, useState } from "react";
import { validatePassword } from "../validator/validators";

interface UsePasswordNumberReturn {
  passwordNumber: string;
  onPasswordNumberChange: Dispatch<string>;
  errorMessage?: string;
  isError: boolean;
}

export default function usePasswordNumber(): UsePasswordNumberReturn {
  const [passwordNumber, setPasswordNumber] = useState("");
  const { errors } = validatePassword(passwordNumber);

  const handlePasswordNumberChange = (value: string) => {
    setPasswordNumber(value.trim());
  };

  return {
    passwordNumber,
    onPasswordNumberChange: handlePasswordNumberChange,
    errorMessage: errors.at(-1)?.message,
    isError: !!errors.at(-1)?.message,
  };
}
