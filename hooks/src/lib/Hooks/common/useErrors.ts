import { useState } from "react";
import { ErrorMessageType } from "../../types";
import useCheckErrorComplete from "./useCheckErrorComplete";

const useErrors = <T extends Record<string, boolean>>({ initialErrorState }: { initialErrorState: T }) => {
  const [errors, setErrors] = useState<T>(initialErrorState);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageType>("");

  const clearError = (type: string) => {
    setErrors((prev) => ({
      ...prev,
      [type]: false,
    }));

    setErrorMessage("");
  };

  const changeError = (type: string, message: ErrorMessageType) => {
    setErrors((prev) => ({
      ...prev,
      [type]: true,
    }));

    setErrorMessage(message);
  };

  const isErrorComplete = useCheckErrorComplete(errors);

  return {
    errors,
    errorMessage,
    clearError,
    changeError,
    isErrorComplete,
  };
};

export default useErrors;
