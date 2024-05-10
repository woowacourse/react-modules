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

  const validateExpiryDate = (month: string, year: string) => {
    if (!cardInputValidator.validateFutureDate(Number(month), Number(year))) {
      setErrorText(VALIDATION_MESSAGES.expiredDate);
      updateAllErrorState(true);

      return;
    }

    setErrorText("");
    updateAllErrorState(false);
  };

  return {
    errorText,
    validateExpiryDate,
  };
};

export default useExpiryDateValidation;
