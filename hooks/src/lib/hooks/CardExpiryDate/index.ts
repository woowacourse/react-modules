import { UseCardHookReturn } from "../types";
import { getCardExpiryDateError } from "./utils";
import useSingleNumberInput from "@/hooks/useSingleNumberInput";

const useCardExpiryDate = (): UseCardHookReturn => {
  return useSingleNumberInput({
    initialValue: { value: "" },
    maxLength: 4,
    getErrorFn: getCardExpiryDateError,
  });
};

export default useCardExpiryDate;
