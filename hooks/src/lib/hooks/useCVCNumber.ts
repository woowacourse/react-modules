import { Dispatch, useState } from "react";
import { validateCVC } from "../validator";

interface useCVCNumberReturn {
  CVCNumber: string;
  onCVCNumberChange: Dispatch<string>;
  errorMessage?: string;
  isError: boolean;
}

export default function useCVCNumber(): useCVCNumberReturn {
  const [CVCNumber, setCVCNumber] = useState("");
  const { errors } = validateCVC(CVCNumber);
  const handleCVCNumberChange = (value: string) => {
    setCVCNumber(value.trim());
  };
  return {
    CVCNumber,
    onCVCNumberChange: handleCVCNumberChange,
    errorMessage: errors.at(-1)?.message,
    isError: !!errors.at(-1)?.message,
  };
}
