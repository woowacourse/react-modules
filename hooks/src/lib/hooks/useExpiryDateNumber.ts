import { Dispatch, useState } from "react";
import { validateExpiryDate } from "../validator/validators";

interface UseExpiryDateNumberReturn {
  expiryDateNumber: string;
  onExpiryDateNumberChange: Dispatch<string>;
  errorMessage?: string;
  isError: boolean;
}

export default function useExpiryDateNumber(): UseExpiryDateNumberReturn {
  const [expiryDateNumber, setExpiryDateNumber] = useState("");
  const { errors } = validateExpiryDate(expiryDateNumber);

  const handleExpiryDateNumberChange = (value: string) => {
    setExpiryDateNumber(value.trim());
  };

  return {
    expiryDateNumber,
    onExpiryDateNumberChange: handleExpiryDateNumberChange,
    errorMessage: errors.at(-1)?.message,
    isError: !!errors.at(-1)?.message,
  };
}
