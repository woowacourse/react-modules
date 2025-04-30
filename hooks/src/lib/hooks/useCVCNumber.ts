import { Dispatch, useState } from "react";
import validateCVCNumber from "../util/validateCVCNumber";

interface useCVCNumberReturn {
  CVCNumber: string;
  setCVCNumber: Dispatch<string>;
  errorMessage?: string;
  isError: boolean;
}

export default function useCVCNumber(): useCVCNumberReturn {
  const [CVCNumber, setCVCNumber] = useState("");
  const errorMessage = validateCVCNumber(CVCNumber);

  return {
    CVCNumber,
    setCVCNumber,
    errorMessage,
    isError: !!errorMessage,
  };
}
