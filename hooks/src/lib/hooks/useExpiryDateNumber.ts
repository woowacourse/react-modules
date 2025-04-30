import { Dispatch, useState } from "react";
import validateExpiryDateNumber from "../util/validateExpiryDateNumber";

interface UseExpiryDateNumberReturn {
  expiryDateNumber: string;
  setExpiryDateNumber: Dispatch<string>;
  errorMessage?: string;
  isError: boolean;
}

export default function useExpiryDateNumber(): UseExpiryDateNumberReturn {
  const [expiryDateNumber, setExpiryDateNumber] = useState("");
  const errorMessage = validateExpiryDateNumber(expiryDateNumber);

  return {
    expiryDateNumber,
    setExpiryDateNumber,
    errorMessage,
    isError: !!errorMessage,
  };
}
