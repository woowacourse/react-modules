import { UseCardHookReturn } from "../types";
import { getCardCVCError } from "./utils";
import useSingleNumberInput from "@/hooks/useSingleNumberInput";

const useCardCVC = (): UseCardHookReturn => {
  const { value, changeInputState, errorState } = useSingleNumberInput({
    initialValue: { value: "" },
    maxLength: 3,
    getErrorFn: getCardCVCError,
  });

  return { value, onChange: changeInputState, errorState };
};

export default useCardCVC;
