import { useState } from "react";
import { hasBlank, isNumber, isRightLength } from "./validate";
import ERROR_MESSAGES from "../constants/error";
import { CVC_LIMIT } from "../constants/cardInputInformation";

type CVC = "CVC";

const useCVCValidation = () => {
  const [CVCValidation, setCVCValidation] = useState({
    errorMessage: {
      CVC: "",
    },
    isError: {
      CVC: false,
    },
  });

  const updateErrorState = (name: CVC, errorMessage: string) => {
    return setCVCValidation((prev) => ({
      errorMessage: { ...prev.errorMessage, [name]: errorMessage },
      isError: { ...prev.isError, [name]: true },
    }));
  };

  const isCVCValid = (value: string, name: CVC) => {
    if (hasBlank(value)) {
      updateErrorState(name, ERROR_MESSAGES.INVALID_TRIM_BLANK);
      return false;
    }
    if (!isNumber(value)) {
      updateErrorState(name, ERROR_MESSAGES.INVALID_ONLY_NUMBER);
      return false;
    }
    if (!isRightLength(value, CVC_LIMIT.FIELD_LENGTH)) {
      updateErrorState(
        name,
        `${CVC_LIMIT.FIELD_LENGTH}${ERROR_MESSAGES.INVALID_MAX_LENGTH}`
      );
      return false;
    }
    return true;
  };

  return { CVCValidation, isCVCValid };
};
export default useCVCValidation;
