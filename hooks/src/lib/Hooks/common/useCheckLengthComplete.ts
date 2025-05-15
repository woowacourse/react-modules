import { useMemo } from "react";
import { cardStateType } from "../../types";

const useCheckLengthComplete = (state: cardStateType, maxLength: number): boolean => {
  return useMemo(() => state.length === maxLength, [state]);
};

export default useCheckLengthComplete;
