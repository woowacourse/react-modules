import { useState } from "react";
import { BaseInputState, ErrorState } from "../lib/types";
import { isNonNumericNonEmpty } from "../utils/validation";

interface UseInputStateParams {
  initialValue: BaseInputState;
  maxLength: number;
  getErrorFn: (value: string) => ErrorState;
}

const useSingleNumberInput = ({
  initialValue,
  maxLength,
  getErrorFn,
}: UseInputStateParams) => {
  const [inputState, setInputState] = useState<BaseInputState>(initialValue);

  const handleInputChange = (value: string) => {
    if (value.length > maxLength || isNonNumericNonEmpty(value)) {
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
    errorState: getErrorFn(inputState.value),
  };
};

export default useSingleNumberInput;
