import { useMemo } from "react";

const useCheckErrorComplete = <T extends Record<string, boolean>>(errors: T) => {
  return useMemo(() => {
    return Object.values(errors).every((error) => !error);
  }, [errors]);
};

export default useCheckErrorComplete;
