import { useState } from "react";
import limitInputNumber from "../util/limitInputNumber/limitInputNumber";
import validateCVCNumber from "../util/validateCVCNumber/validateCVCNumber";
import { CVC_LENGTH } from "../constants";

interface useCVCNumberReturn {
  CVCNumber: string;
  setCVCNumber: (input: string) => void;
  errorMessage?: string;
  isError: boolean;
}

export default function useCVCNumber(): useCVCNumberReturn {
  const [CVCNumber, setCVCNumber] = useState("");
  const errorMessage = validateCVCNumber(CVCNumber);

  const setValidCVCNumber = (CVCNumber: string) =>
    limitInputNumber({
      inputNumbers: CVCNumber,
      setInputNumber: setCVCNumber,
      groupLengths: [CVC_LENGTH],
    });

  return {
    CVCNumber,
    setCVCNumber: setValidCVCNumber,
    errorMessage,
    isError: !!errorMessage,
  };
}
