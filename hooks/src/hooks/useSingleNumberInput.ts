import { useCallback, useState } from "react";
import { isNonNumericNonEmpty } from "../utils/validation";
import type { BaseInputState } from "@/types/input";
import type { ErrorState } from "@/types/validation";

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

  const changeInputState = useCallback(
    (value: string) => {
      if (value.length > maxLength || isNonNumericNonEmpty(value)) {
        return;
      }

      setInputState((prev) => ({
        ...prev,
        value,
      }));
    },
    [maxLength]
  );

  return {
    value: inputState.value,
    changeInputState,
    errorState: getErrorFn(inputState.value),
  };
};

export default useSingleNumberInput;
