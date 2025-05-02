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

  return {
    expiryDateNumber,
    onExpiryDateNumberChange: setExpiryDateNumber,
    errorMessage: errors.at(-1)?.message,
    isError: !!errors.at(-1)?.message,
  };
}
