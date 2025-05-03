import { useState } from "react";
import { BaseInputState, ValidationResult } from "../lib/types";

interface UseInputStateParams {
  initialValue: BaseInputState;
  maxLength: number;
  validateFn: (value: string) => ValidationResult;
}

const useCardSingleInput = ({
  initialValue,
  maxLength,
  validateFn,
}: UseInputStateParams) => {
  const [inputState, setInputState] = useState<BaseInputState>(initialValue);

  const handleInputChange = (value: string) => {
    if (value.length > maxLength) {
      return;
    }

    setInputState((prev) => ({
      ...prev,
      value,
    }));
  };

  return {
    inputState,
    handleInputChange,
    errorState: validateFn(inputState.value),
  };
};

export default useCardSingleInput;
