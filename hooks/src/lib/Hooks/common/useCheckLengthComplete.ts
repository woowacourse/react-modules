import { useMemo } from "react";
import { cardStateType } from "../../types";

const useCheckLengthComplete = (state: cardStateType, maxLength: number): boolean => {
  return useMemo(() => {
    if (typeof state === "object") {
      return Object.values(state).every((item) => item.length === maxLength);
    }
    return state.length === maxLength;
  }, [state]);
};

export default useCheckLengthComplete;
