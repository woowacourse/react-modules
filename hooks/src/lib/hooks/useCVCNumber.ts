import { Dispatch, useState } from "react";

interface useCVCNumberReturn {
  CVCNumber: string;
  setCVCNumber: Dispatch<string>;
  errorMessage?: string;
  isError: boolean;
}

export default function useCVCNumber(): useCVCNumberReturn {
  const [CVCNumber, setCVCNumber] = useState("");
  const errorMessage = "";

  return {
    CVCNumber,
    setCVCNumber,
    errorMessage,
    isError: !!errorMessage,
  };
}
