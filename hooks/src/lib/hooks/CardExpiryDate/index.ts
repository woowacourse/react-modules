import { UseCardHookReturn } from "../types";
import { getCardExpiryDateError } from "./utils";
import useSingleNumberInput from "@/hooks/useSingleNumberInput";

const useCardExpiryDate = (): UseCardHookReturn => {
  const { value, changeInputState, errorState } = useSingleNumberInput({
    initialValue: { value: "" },
    maxLength: 4,
    getErrorFn: getCardExpiryDateError,
  });

  return { value, onChange: changeInputState, errorState };
};

export default useCardExpiryDate;
