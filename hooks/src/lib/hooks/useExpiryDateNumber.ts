import { Dispatch, useCallback, useState } from "react";
import { validateExpiryDate } from "../validator/validators";

export interface UseExpiryDateNumberReturn {
  expiryDateNumber: string;
  onExpiryDateNumberChange: Dispatch<React.ChangeEvent<HTMLInputElement>>;
  errorMessage?: string;
  isError: boolean;
}

export default function useExpiryDateNumber(): UseExpiryDateNumberReturn {
  const [expiryDateNumber, setExpiryDateNumber] = useState("");
  const { errors } = validateExpiryDate(expiryDateNumber);

  const handleExpiryDateNumberChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setExpiryDateNumber(event.target.value.trim());
    },
    []
  );
  return {
    expiryDateNumber,
    onExpiryDateNumberChange: handleExpiryDateNumberChange,
    errorMessage: errors.at(0)?.message,
    isError: !!errors.at(0)?.message,
  };
}
