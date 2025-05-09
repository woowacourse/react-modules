import { Dispatch, useCallback, useState } from "react";
import { validatePassword } from "../validator/validators";

export interface UsePasswordNumberReturn {
  passwordNumber: string;
  onPasswordNumberChange: Dispatch<React.ChangeEvent<HTMLInputElement>>;
  errorMessage?: string;
  isError: boolean;
}

export default function usePasswordNumber(): UsePasswordNumberReturn {
  const [passwordNumber, setPasswordNumber] = useState("");
  const { errors } = validatePassword(passwordNumber);

  const handlePasswordNumberChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordNumber(event.target.value.trim());
    },
    []
  );

  return {
    passwordNumber,
    onPasswordNumberChange: handlePasswordNumberChange,
    errorMessage: errors.at(-1)?.message,
    isError: !!errors.at(-1)?.message,
  };
}
