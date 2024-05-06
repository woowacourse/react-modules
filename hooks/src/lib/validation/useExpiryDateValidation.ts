import { useState } from "react";
import { hasBlank, isNumber, isValidMonth, isValidYear } from "./validate";
import ERROR_MESSAGES from "../constants/error";

type CardExpiryName = "month" | "year";

const useExpiryDateValidation = () => {
  const [expiryDateValidation, setExpiryDateValidation] = useState({
    errorMessage: {
      month: "",
      year: "",
    },
    isError: {
      month: false,
      year: false,
    },
  });

  const updateErrorState = (name: CardExpiryName, errorMessage: string) => {
    return setExpiryDateValidation((prev) => ({
      errorMessage: { ...prev.errorMessage, [name]: errorMessage },
      isError: { ...prev.isError, [name]: true },
    }));
  };
  const isExpiryDateValid = (value: string, name: CardExpiryName) => {
    if (hasBlank(value)) {
      updateErrorState(name, ERROR_MESSAGES.INVALID_TRIM_BLANK);
      return false;
    }
    if (!isNumber(value)) {
      updateErrorState(name, ERROR_MESSAGES.INVALID_ONLY_NUMBER);
      return false;
    }

    if (name === "month" && !isValidMonth(value)) {
      updateErrorState(name, ERROR_MESSAGES.INVALID_MONTH);
      return false;
    }

    if (name === "year" && !isValidYear(value)) {
      updateErrorState(name, ERROR_MESSAGES.INVALID_YEAR);
      return false;
    }
    return true;
  };

  return { expiryDateValidation, isExpiryDateValid };
};
export default useExpiryDateValidation;
