import { Dispatch, useCallback, useState } from "react";
import { validateCVC } from "../validator/validators";

export interface useCVCNumberReturn {
  CVCNumber: string;
  onCVCNumberChange: Dispatch<React.ChangeEvent<HTMLInputElement>>;
  errorMessage?: string;
  isError: boolean;
}

export default function useCVCNumber(): useCVCNumberReturn {
  const [CVCNumber, setCVCNumber] = useState("");
  const { errors } = validateCVC(CVCNumber);
  const handleCVCNumberChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCVCNumber(event.target.value.trim());
    },
    []
  );

  return {
    CVCNumber,
    onCVCNumberChange: handleCVCNumberChange,
    errorMessage: errors.at(-1)?.message,
    isError: !!errors.at(-1)?.message,
  };
}
