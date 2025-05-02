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

  return {
    CVCNumber,
    onCVCNumberChange: setCVCNumber,
    errorMessage: errors.at(-1)?.message,
    isError: !!errors.at(-1)?.message,
  };
}
