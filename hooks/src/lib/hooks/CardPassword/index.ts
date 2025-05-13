import { UseCardHookReturn } from "../types";
import { getCardPasswordError } from "./utils";
import useSingleNumberInput from "@/hooks/useSingleNumberInput";

const useCardPassword = (): UseCardHookReturn => {
  const { value, changeInputState, errorState } = useSingleNumberInput({
    initialValue: { value: "" },
    maxLength: 2,
    getErrorFn: getCardPasswordError,
  });

  return { value, onChange: changeInputState, errorState };
};

export default useCardPassword;
