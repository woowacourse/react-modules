import { useMemo } from "react";
import { ListErrorType, SingleErrorType } from "../../types";

const useCheckErrorComplete = (isError: SingleErrorType | ListErrorType) => {
  return useMemo(() => {
    if (Array.isArray(isError)) return isError.every((error) => !error);
    return !isError;
  }, [isError]);
};

export default useCheckErrorComplete;
