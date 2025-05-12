import { UseCardHookReturn } from "../types";
import { getCardCVCError } from "./utils";
import useSingleNumberInput from "@/hooks/useSingleNumberInput";

const useCardCVC = (): UseCardHookReturn => {
  return useSingleNumberInput({
    initialValue: { value: "" },
    maxLength: 3,
    getErrorFn: getCardCVCError,
  });
};

export default useCardCVC;
