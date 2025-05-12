import { UseCardHookReturn } from "../types";
import { getCardPasswordError } from "./utils";
import useSingleNumberInput from "@/hooks/useSingleNumberInput";

const useCardPassword = (): UseCardHookReturn => {
  return useSingleNumberInput({
    initialValue: { value: "" },
    maxLength: 2,
    getErrorFn: getCardPasswordError,
  });
};

export default useCardPassword;
