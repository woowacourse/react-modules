import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

import { VALIDATION_MESSAGES } from "../constants/cardCustomHook";

const useExpiryDateValidation = (
  expiryMonthSetError: React.Dispatch<React.SetStateAction<boolean>>,
  expiryYearSetError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [errorText, setErrorText] = useState("");

  const updateAllErrorState = (validResult: boolean) => {
    expiryMonthSetError(validResult);
    expiryYearSetError(validResult);
  };

  const validateExpiryDate = (month: string, year: string): boolean => {
    if (
      !cardInputValidator.validateFutureDate(
        parseInt(month, 10),
        parseInt(year, 10)
      )
    ) {
      setErrorText(VALIDATION_MESSAGES.expiredDate);
      updateAllErrorState(true);

      return true;
    }

    setErrorText("");
    updateAllErrorState(false);

    return true;
  };

  return {
    errorText,
    validateExpiryDate,
  };
};

export default useExpiryDateValidation;
